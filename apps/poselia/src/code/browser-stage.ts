// The stage in a browser: the scene of the page "Salutation au soleil", drawn by three.js. The mannequin is made once;
// each frame places its segments, its joints and its ellipsoids where the body is, the camera follows the body's middle
// and eases toward the view asked, and the scene is drawn. A finger turns it, two fingers or a wheel bring it closer.
// The landmarks (lines, dots and arrowheads drawn in front of the body, their words in a layer of the page) are placed
// again when they change, their meshes and words kept from one frame to the next, and their words follow their points
// on the screen at each frame.

import * as THREE from "three"
import type { BodyOf } from "../../../../trame/kernel"
import type { BrowserStage } from "../stage"
import type { Body, Side, Vec } from "../body"
import type { StageMarks } from "../architecture"

const body: BodyOf<typeof BrowserStage> = ({ look, light, views, style, counts, html }) => {
  const zero = counts.zero
  const one = counts.next(zero)
  const UP = new THREE.Vector3(zero, one, zero)
  const Z = new THREE.Vector3(zero, zero, one)
  const v3 = ([x, y, z]: Vec) => new THREE.Vector3(x, y, z)

  let latest: Body | undefined
  let latestMarks: StageMarks | undefined
  let stop: (() => void) | undefined
  let [turn, tilt] = views.start
  let turnTo = turn
  let tiltTo = tilt
  let distance = views.wide
  let chosen: number | undefined

  const mount = (host: object) => {
    stop?.()
    const el = host as HTMLElement
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || one, light.sharpest))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFShadowMap
    el.prepend(renderer.domElement)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(light.lens, one, light.nearest, light.farthest)
    scene.add(new THREE.HemisphereLight(light.sky, light.ground, light.ambient))
    const sun = new THREE.DirectionalLight(light.sunColour, light.sun)
    sun.position.set(...light.sunAt)
    sun.castShadow = true
    sun.shadow.mapSize.set(light.shadowMap, light.shadowMap)
    Object.assign(sun.shadow.camera, { left: -light.shadowExtent, right: light.shadowExtent, top: light.shadowExtent, bottom: -light.shadowExtent, near: light.shadowNear, far: light.shadowFar })
    sun.shadow.bias = light.shadowBias
    sun.target.position.set(...light.sunAims)
    scene.add(sun, sun.target)
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(light.floor, light.floor), new THREE.ShadowMaterial({ opacity: light.floorShadow }))
    floor.rotation.x = light.quarterTurn
    floor.receiveShadow = true
    scene.add(floor)
    const mat = new THREE.Mesh(new THREE.BoxGeometry(...light.mat), new THREE.MeshStandardMaterial({ color: light.matColour, roughness: light.matRoughness }))
    mat.position.set(...light.matAt)
    mat.receiveShadow = true
    scene.add(mat)

    // The mannequin: its segments are cylinders of unit length, scaled along their axis; its joints are balls.
    const wood = new THREE.MeshStandardMaterial({ color: look.wood, roughness: look.woodRoughness })
    const jointWood = new THREE.MeshStandardMaterial({ color: look.joint, roughness: look.jointRoughness })
    const figure = new THREE.Group()
    scene.add(figure)
    const mesh = (geometry: THREE.BufferGeometry, material: THREE.Material) => {
      const o = new THREE.Mesh(geometry, material)
      o.castShadow = true
      figure.add(o)
      return o
    }
    const segment = ([from, to]: [number, number]) => mesh(new THREE.CylinderGeometry(to, from, one, look.limbSides), wood)
    const ball = (r: number, material: THREE.Material = jointWood) => mesh(new THREE.SphereGeometry(r, ...look.sphereSides), material)
    const ellipsoid = () => mesh(new THREE.SphereGeometry(one, ...look.ellipseSides), wood)
    const along = new THREE.Vector3()
    const place = (o: THREE.Mesh, a: Vec, b: Vec) => {
      const from = v3(a)
      const to = v3(b)
      along.subVectors(to, from)
      o.scale.set(one, Math.max(along.length(), look.shortest), one)
      o.position.addVectors(from, to).multiplyScalar(look.middle)
      o.quaternion.setFromUnitVectors(UP, along.normalize())
    }
    const at = (o: THREE.Mesh, p: Vec) => o.position.copy(v3(p))
    const basis = new THREE.Matrix4()
    const orient = (o: THREE.Mesh, centre: THREE.Vector3, x: THREE.Vector3, y: THREE.Vector3, z: THREE.Vector3, size: [number, number, number]) => {
      basis.makeBasis(x, y, z)
      o.quaternion.setFromRotationMatrix(basis)
      o.position.copy(centre)
      o.scale.set(...size)
    }
    const side = () => ({
      thigh: segment(look.thigh), shin: segment(look.shin), upperArm: segment(look.upperArm), forearm: segment(look.forearm),
      hip: ball(look.hip), knee: ball(look.knee), ankle: ball(look.ankle), shoulder: ball(look.shoulder), elbow: ball(look.elbow), wrist: ball(look.wrist),
      hand: ellipsoid(), foot: ellipsoid(), toes: ellipsoid(),
    })
    const parts = {
      L: side(), R: side(), pelvis: ellipsoid(), chest: ellipsoid(), abdomen: segment(look.abdomen), waist: ball(look.waist, wood),
      shoulderBar: segment(look.shoulderBar), neck: segment(look.neck), head: ball(look.head, wood), nose: ball(look.nose),
    }
    const drawSide = (s: Side, p: ReturnType<typeof side>) => {
      place(p.thigh, s.hip, s.knee)
      place(p.shin, s.knee, s.ankle)
      place(p.upperArm, s.shoulder, s.elbow)
      place(p.forearm, s.elbow, s.wrist)
      at(p.hip, s.hip); at(p.knee, s.knee); at(p.ankle, s.ankle); at(p.shoulder, s.shoulder); at(p.elbow, s.elbow); at(p.wrist, s.wrist)
      const hand = v3(s.handAlong)
      const across = v3(s.handAcross)
      orient(p.hand, v3(s.wrist).addScaledVector(hand, look.handForward), hand, across.clone().cross(hand), across, look.hand)
      const foot = v3(s.footAlong)
      const footUp = v3(s.footUp)
      orient(p.foot, v3(s.ankle).addScaledVector(footUp, -look.footDown).addScaledVector(foot, look.footForward), foot, footUp, Z, look.foot)
      const toes = v3(s.toesAlong)
      orient(p.toes, v3(s.ball).addScaledVector(toes, look.toesForward), toes, new THREE.Vector3(-toes.y, toes.x, zero), Z, look.toes)
    }
    const draw = (b: Body) => {
      drawSide(b.L, parts.L)
      drawSide(b.R, parts.R)
      const lowerBack = v3(b.lowerBack)
      const chest = v3(b.chest)
      orient(parts.pelvis, v3(b.pelvis).addScaledVector(lowerBack, look.pelvisUp), new THREE.Vector3(lowerBack.y, -lowerBack.x, zero), lowerBack, Z, look.pelvis)
      orient(parts.chest, v3(b.waist).addScaledVector(chest, look.chestUp), new THREE.Vector3(chest.y, -chest.x, zero), chest, Z, look.chest)
      place(parts.abdomen, b.pelvis, b.waist)
      at(parts.waist, b.waist)
      place(parts.shoulderBar, b.L.shoulder, b.R.shoulder)
      place(parts.neck, b.neckBase, b.neckTop)
      at(parts.head, b.head)
      at(parts.nose, b.nose)
    }

    // The landmarks: drawn in front of the body, their words in a layer over the scene. Their meshes and their words
    // are kept and placed again when the landmarks change (at each frame while the body moves), made only when more
    // are needed; the shapes of a width are made once.
    const marksGroup = new THREE.Group()
    marksGroup.renderOrder = style.inFront
    scene.add(marksGroup)
    const solid = new THREE.MeshBasicMaterial({ color: style.colour, depthTest: false, transparent: true, opacity: style.solid })
    const soft = new THREE.MeshBasicMaterial({ color: style.colour, depthTest: false, transparent: true, opacity: style.soft })
    const layer = document.createElement(html.div)
    layer.className = style.layer
    el.append(layer)
    let drawnMarks: StageMarks | undefined
    const once = <G>(made: Map<number, G>, size: number, make: () => G): G => {
      const known = made.get(size)
      if (known) return known
      const shape = make()
      made.set(size, shape)
      return shape
    }
    const cylinders = new Map<number, THREE.BufferGeometry>()
    const spheres = new Map<number, THREE.BufferGeometry>()
    const [headRadius, headLength, headSides] = style.head
    const cone = new THREE.ConeGeometry(headRadius, headLength, headSides)
    const kept = { segments: [] as THREE.Mesh[], dots: [] as THREE.Mesh[], heads: [] as THREE.Mesh[] }
    // As many meshes as asked: the missing ones made, the extra ones taken out of the scene.
    const pool = (meshes: THREE.Mesh[], count: number) => {
      while (meshes.length < count) {
        const o = new THREE.Mesh(cone, solid)
        o.renderOrder = style.inFront
        marksGroup.add(o)
        meshes.push(o)
      }
      for (const o of meshes.splice(count)) marksGroup.remove(o)
    }
    let words: { el: HTMLElement; at: THREE.Vector3; shown?: string }[] = []
    const remake = (marks: StageMarks | undefined) => {
      drawnMarks = marks
      const segments = marks?.segments ?? []
      const dots = marks?.dots ?? []
      const heads = marks?.heads ?? []
      const labels = marks?.labels ?? []
      pool(kept.segments, segments.length)
      segments.forEach((s, i) => {
        const o = kept.segments[i]
        o.geometry = once(cylinders, s.width, () => new THREE.CylinderGeometry(s.width, s.width, one, style.lineSides))
        o.material = s.soft ? soft : solid
        place(o, s.from, s.to)
      })
      pool(kept.dots, dots.length)
      dots.forEach((d, i) => {
        const o = kept.dots[i]
        o.geometry = once(spheres, d.radius, () => new THREE.SphereGeometry(d.radius, ...style.dotSides))
        o.quaternion.identity()
        o.scale.set(one, one, one)
        at(o, d.at)
      })
      pool(kept.heads, heads.length)
      heads.forEach((h, i) => {
        const o = kept.heads[i]
        o.geometry = cone
        o.scale.set(one, one, one)
        o.quaternion.setFromUnitVectors(UP, v3(h.toward))
        at(o, h.at)
      })
      while (words.length < labels.length) {
        const e = document.createElement(html.div)
        layer.append(e)
        words.push({ el: e, at: new THREE.Vector3() })
      }
      for (const w of words.splice(labels.length)) w.el.remove()
      labels.forEach((l, i) => {
        const word = words[i]
        word.at.copy(v3(l.at))
        const shown = [l.number, l.text, l.degrees].join()
        if (word.shown === shown) return
        word.shown = shown
        word.el.className = style.label
        if (l.degrees) word.el.classList.add(style.degrees)
        const parts: (HTMLElement | string)[] = [l.text]
        if (l.number !== undefined) {
          const n = document.createElement(html.b)
          n.textContent = l.number
          parts.unshift(n)
        }
        word.el.replaceChildren(...parts)
      })
    }
    const projected = new THREE.Vector3()
    const placeWords = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      for (const word of words) {
        projected.copy(word.at).project(camera)
        word.el.hidden = projected.z > one
        const x = Math.max(style.marginX, Math.min(w - style.marginX, ((projected.x + one) / (one + one)) * w))
        const y = Math.max(style.marginY, Math.min(h - style.marginY, ((one - projected.y) / (one + one)) * h))
        word.el.style.setProperty(style.xVariable, String(x))
        word.el.style.setProperty(style.yVariable, String(y))
      }
    }

    // The camera: it follows the body's middle, eases toward the view asked, and turns with a finger.
    const aim = new THREE.Vector3(...views.aim)
    const middle = new THREE.Vector3()
    const fingers = new Map<number, { x: number; y: number }>()
    let apart: number = zero
    const down = (e: PointerEvent) => {
      if ((e.target as Element).closest?.(html.button)) return
      el.setPointerCapture(e.pointerId)
      fingers.set(e.pointerId, { x: e.clientX, y: e.clientY })
    }
    const move = (e: PointerEvent) => {
      const f = fingers.get(e.pointerId)
      if (!f) return
      if (fingers.size === one) {
        turnTo -= (e.clientX - f.x) * views.dragAcross
        turn = turnTo
        tiltTo = Math.max(views.lowest, Math.min(views.highest, tiltTo + (e.clientY - f.y) * views.dragAlong))
        tilt = tiltTo
      }
      f.x = e.clientX
      f.y = e.clientY
      const [a, b] = [...fingers.values()]
      if (a && b) {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (apart) chosen = Math.max(views.closest, Math.min(views.farthest, (chosen ?? distance) * apart / d))
        apart = d
      }
    }
    const up = (e: PointerEvent) => {
      fingers.delete(e.pointerId)
      apart = zero
    }
    const wheel = (e: WheelEvent) => {
      e.preventDefault()
      chosen = Math.max(views.closest, Math.min(views.farthest, (chosen ?? distance) * (one + e.deltaY * views.wheel)))
    }
    el.onpointerdown = down
    el.onpointermove = move
    el.onpointerup = up
    el.onpointercancel = up
    el.onwheel = wheel
    const resize = () => {
      const w = el.clientWidth
      const h = el.clientHeight || one
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      distance = w / h < views.tallBelow ? views.tall : views.wide
    }
    const watch = new ResizeObserver(resize)
    watch.observe(el)
    resize()
    let running = true
    const frame = () => {
      if (!running) return
      requestAnimationFrame(frame)
      if (latest) {
        draw(latest)
        middle.addVectors(v3(latest.pelvis), v3(latest.shoulders)).multiplyScalar(look.middle)
        middle.y += views.above
        middle.z = zero
        aim.lerp(middle, views.follow)
      }
      turn += (turnTo - turn) * views.turn
      tilt += (tiltTo - tilt) * views.turn
      const r = chosen ?? distance
      camera.position.set(aim.x + r * Math.cos(tilt) * Math.sin(turn), aim.y + r * Math.sin(tilt), aim.z + r * Math.cos(tilt) * Math.cos(turn))
      camera.lookAt(aim)
      if (latestMarks !== drawnMarks) remake(latestMarks)
      renderer.render(scene, camera)
      placeWords()
    }
    requestAnimationFrame(frame)
    stop = () => {
      running = false
      watch.disconnect()
      remake(undefined)
      for (const g of [...cylinders.values(), ...spheres.values(), cone]) g.dispose()
      renderer.dispose()
      renderer.domElement.remove()
      layer.remove()
      stop = undefined
    }
  }

  return {
    mount,
    unmount: () => stop?.(),
    show: (b, marks) => {
      latest = b
      latestMarks = marks
    },
    view: (name) => {
      const v = views.views[name]
      if (!v) return
      const [to, height] = v
      const d = to - turnTo
      turnTo += Math.atan2(Math.sin(d), Math.cos(d))
      tiltTo = height
    },
  }
}

export default body
