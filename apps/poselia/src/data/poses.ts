// The poses of the sun salutation in twelve steps, as data: the dataset "Poses" (module content) checks them. Each is
// placed as a teacher places a body on the mat, in metres and degrees (module body says what each value measures):
// the pelvis, the spine, where the hands and the feet go, and what it rests on. The build checks that each rests on that
// and on nothing else, and that every limb reaches. The values are those of the page "Salutation au soleil".

import { LegRest, BodyRest, Level, Point, Which, type LegShape, type ArmShape, type Spot, type Vec } from "../body"
import type { Pose, Mark, MarkShape } from "../content"

/** The feet together at the front of the mat, flat. */
const together: LegShape = { at: [0, 0.065, 0.06], foot: 0, toes: 0, rests: [LegRest.foot] }
/** The hands flat on the floor beside the feet: they stay there from the forward bend to the forward bend. */
const planted: ArmShape = { at: [0.03, 0.035, 0.2], hand: 0, palm: 0 }

/** A spot of the body, on a side, on the floor or moved. */
const spot = (at: Point, side?: Which, more: { floor?: boolean; shift?: Vec } = {}): Spot => ({ at, ...(side ? { side } : {}), ...more })
/** A landmark: its words and its sentence in French then in English, its spot, where its words sit, what it draws. */
const mark = ([frTitle, frText]: [string, string], [enTitle, enText]: [string, string], at: Spot, label: Vec, shapes?: MarkShape[]): Mark =>
  ({ title: { fr: frTitle, en: enTitle }, text: { fr: frText, en: enText }, at, label, ...(shapes ? { shapes } : {}) })
const L = Which.left, R = Which.right, M = Which.both, F = Which.front, B = Which.back

export const poses: Pose[] = [
  {
    id: "pranamasana", sanskrit: "Pranamasana", name: { fr: "Posture de la prière", en: "Prayer pose" },
    level: Level.standing,
    cue: { fr: "Debout, pieds joints, mains jointes devant la poitrine, épaules relâchées.", en: "Stand with the feet together, palms joined before the chest, shoulders relaxed." },
    said: { fr: "Mains jointes devant la poitrine", en: "Palms together at the chest" },
    marks: [
      mark(["Pieds joints", "Pieds joints, poids réparti sur les deux pieds"], ["Feet together", "Feet together, weight on both feet"], spot(Point.ball, M), [0.25, 0.12, 0.25]),
      mark(["Mains au sternum", "Mains jointes devant le sternum, en position de prière"], ["Palms at the sternum", "Palms joined before the sternum, as in prayer"], spot(Point.wrist, M), [0.32, 0.12, 0.1]),
      mark(["Colonne droite", "Colonne droite, épaules relâchées"], ["Spine straight", "Spine straight, shoulders relaxed"], spot(Point.waist), [-0.35, 0.05, 0.1],
        [{ line: [spot(Point.head), spot(Point.pelvis), spot(Point.ankle, M)], dashed: true }]),
    ],
    shape: { pelvis: [0, 0.93], spine: [90, 90, 90, 90], legs: together, arms: { at: [0.2, 1.16, 0.035], hand: 80, palm: 1 } },
  },
  {
    id: "hasta-uttanasana", sanskrit: "Hasta Uttanasana", name: { fr: "Bras levés", en: "Raised arms pose" },
    level: Level.standing,
    cue: { fr: "Bras tendus au-dessus de la tête, biceps près des oreilles : étirez-vous vers le haut, puis doucement vers l'arrière.", en: "Arms straight overhead, biceps by the ears: stretch up, then gently back." },
    said: { fr: "Bras au-dessus de la tête", en: "Arms overhead" },
    marks: [
      mark(["Biceps près des oreilles", "Bras tendus, biceps près des oreilles"], ["Biceps by the ears", "Arms straight, biceps by the ears"], spot(Point.tip, M), [0.25, 0.12, 0.1]),
      mark(["Bassin vers l’avant", "Avancez légèrement le bassin"], ["Pelvis forward", "Bring the pelvis slightly forward"], spot(Point.pelvis), [0.45, 0, 0.1],
        [{ arrow: [spot(Point.pelvis), spot(Point.pelvis, undefined, { shift: [0.3, 0, 0] })] }]),
      mark(["Jambes tendues", "Jambes tendues, poids sur les deux pieds"], ["Legs straight", "Legs straight, weight on both feet"], spot(Point.knee, M), [0.32, 0, 0.12]),
      mark(["Nuque détendue", "Étirez-vous vers le haut plus que vers l’arrière, nuque détendue"], ["Neck relaxed", "Stretch up more than back, the neck relaxed"], spot(Point.neckTop), [-0.4, 0, 0]),
    ],
    shape: {
      pelvis: [0.05, 0.928], spine: [97, 106, 112, 116], legs: together,
      arms: { fromShoulders: { angle: 112, reach: 0.545, apart: 0.16 }, hand: 112, palm: 1 },
    },
  },
  {
    id: "padahastasana", sanskrit: "Padahastasana", name: { fr: "Flexion avant debout", en: "Standing forward bend" },
    level: Level.fold,
    cue: { fr: "Penchez-vous depuis les hanches, paumes au sol de part et d’autre des pieds, genoux souples si besoin.", en: "Fold from the hips, palms on the floor beside the feet, knees soft if needed." },
    said: { fr: "Penchez-vous, mains au sol", en: "Fold, hands down" },
    marks: [
      mark(["Doigts près des orteils", "Paumes à plat, bout des doigts alignés avec les orteils"], ["Fingers by the toes", "Palms flat, fingertips in line with the toes"], spot(Point.tip, R), [0.25, 0.1, 0.22],
        [{ line: [spot(Point.tip, L), spot(Point.tip, R)], dashed: true }]),
      mark(["Genoux souples", "Pliez les genoux si nécessaire, puis tendez-les doucement"], ["Knees soft", "Bend the knees if needed, then straighten them gently"], spot(Point.knee, M), [-0.4, 0.05, 0]),
      mark(["Tête vers les genoux", "Tête relâchée vers les genoux"], ["Head toward the knees", "Head relaxed toward the knees"], spot(Point.head), [0.38, 0.12, 0]),
      mark(["Mains fixes", "Les mains ne bougent plus tant qu’elles portent le corps"], ["Hands stay put", "The hands stay where they are while they carry the body"], spot(Point.wrist, L), [0.3, 0.2, -0.15],
        [{ dot: spot(Point.wrist, L) }, { dot: spot(Point.wrist, R) }]),
    ],
    shape: { pelvis: [-0.03, 0.915], spine: [-40, -95, -80, -88], legs: together, arms: planted, rests: [BodyRest.hands] },
  },
  {
    id: "ashwa-sanchalanasana", sanskrit: "Ashwa Sanchalanasana", name: { fr: "Posture du cavalier", en: "Equestrian pose" },
    level: Level.lunge,
    cue: { fr: "Une jambe loin derrière, le genou au sol ; le pied avant entre les mains, le tibia vertical ; regard vers le haut.", en: "One leg far back, the knee down; the front foot between the hands, the shin upright; look up." },
    said: { fr: "Une jambe en arrière, regard haut", en: "One leg back, look up" },
    marks: [
      mark(["Pied entre les mains", "Pied avant exactement entre les mains"], ["Foot between the hands", "Front foot right between the hands"], spot(Point.ball, F), [0.35, 0.08, 0.1]),
      mark(["Tibia vertical", "Genou avant au-dessus de la cheville, tibia vertical"], ["Shin upright", "Front knee over the ankle, shin upright"], spot(Point.knee, F), [0.35, 0.22, 0.1],
        [{ plumb: spot(Point.knee, F) }]),
      mark(["Genou au sol", "Genou arrière posé au sol, jambe étirée loin derrière"], ["Knee down", "Back knee on the floor, leg stretched far behind"], spot(Point.knee, B), [0, 0.3, 0.2],
        [{ dot: spot(Point.knee, B, { floor: true }) }]),
      mark(["Regard vers le haut", "Poitrine ouverte, menton levé, regard vers le haut"], ["Look up", "Chest open, chin lifted, looking up"], spot(Point.head), [0.3, 0.28, 0]),
    ],
    shape: {
      pelvis: [-0.44, 0.33], spine: [22, 36, 50, 66], arms: planted, rests: [BodyRest.hands],
      legs: {
        front: { at: [0, 0.065, 0.07], foot: 0, toes: 0, rests: [LegRest.foot] },
        back: { at: [-1.205, 0.145, 0.1], foot: -70, toes: 0, rests: [LegRest.toes, LegRest.knee] },
      },
    },
  },
  {
    id: "dandasana", sanskrit: "Dandasana", name: { fr: "Planche", en: "Plank" },
    level: Level.plank,
    cue: { fr: "En appui sur les mains et les orteils, le corps en ligne droite des épaules aux talons.", en: "On the hands and the toes, the body in a straight line from the shoulders to the heels." },
    said: { fr: "Corps en ligne droite", en: "Body in a straight line" },
    marks: [
      mark(["Corps en ligne droite", "Corps en ligne droite, des épaules aux talons"], ["Body in a straight line", "Body in a straight line from shoulders to heels"], spot(Point.pelvis), [0, 0.35, 0.15],
        [{ line: [spot(Point.shoulders), spot(Point.heel, M)], dashed: true }]),
      mark(["Bras perpendiculaires", "Bras perpendiculaires au sol, poignets sous les épaules"], ["Arms square to the floor", "Arms square to the floor, wrists under the shoulders"], spot(Point.elbow, R), [0.35, 0.15, 0.2],
        [{ angle: { at: spot(Point.wrist, R), from: spot(Point.shoulder, R), to: spot(Point.wrist, R, { shift: [-0.3, 0, 0] }), radius: 0.13 } }]),
      mark(["Mains et orteils", "Appui sur les mains et les orteils"], ["Hands and toes", "On the hands and the toes"], spot(Point.ball, M), [0, 0.35, 0.15],
        [{ dot: spot(Point.wrist, L) }, { dot: spot(Point.wrist, R) }, { dot: spot(Point.ball, L) }, { dot: spot(Point.ball, R) }]),
    ],
    shape: {
      pelvis: [-0.404, 0.428], spine: [19.3, 19.3, 22, 15], arms: planted, rests: [BodyRest.hands],
      legs: { at: [-1.21, 0.145, 0.08], foot: -70, toes: 0, rests: [LegRest.toes] },
    },
  },
  {
    id: "ashtanga-namaskara", sanskrit: "Ashtanga Namaskara", name: { fr: "Salut aux huit membres", en: "Salute with eight parts" },
    level: Level.prone,
    cue: { fr: "Genoux, poitrine et menton au sol, les hanches levées, les coudes près du corps.", en: "Knees, chest and chin on the floor, the hips raised, the elbows close to the body." },
    said: { fr: "Genoux, poitrine, menton au sol", en: "Knees, chest, chin down" },
    marks: [
      mark(["8 points au sol", "Huit points touchent le sol : mains, genoux, orteils, poitrine et menton"], ["8 points down", "Eight points touch the floor: hands, knees, toes, chest and chin"], spot(Point.knee, M), [0.1, 0.35, 0.3],
        [{ dot: spot(Point.wrist, L) }, { dot: spot(Point.wrist, R) }, { dot: spot(Point.knee, L, { floor: true }) }, { dot: spot(Point.knee, R, { floor: true }) },
          { dot: spot(Point.ball, L) }, { dot: spot(Point.ball, R) }, { dot: spot(Point.sternum, undefined, { floor: true }) }, { dot: spot(Point.nose, undefined, { floor: true }) }]),
      mark(["Hanches hautes", "Hanches relevées, le ventre ne touche pas le sol"], ["Hips up", "Hips raised, the belly off the floor"], spot(Point.pelvis), [-0.15, 0.35, 0]),
      mark(["Coudes près du corps", "Coudes serrés près du corps, pointés vers l’arrière"], ["Elbows in", "Elbows close to the body, pointing back"], spot(Point.elbow, R), [0.1, 0.3, 0.22]),
    ],
    shape: {
      pelvis: [-0.27, 0.34], spine: [-40, -8, 5, 0], arms: planted, rests: [BodyRest.hands, BodyRest.chest, BodyRest.head],
      legs: { at: [-1.02, 0.145, 0.08], foot: -70, toes: 0, rests: [LegRest.toes, LegRest.knee] },
    },
  },
  {
    id: "bhujangasana", sanskrit: "Bhujangasana", name: { fr: "Cobra", en: "Cobra pose" },
    level: Level.prone,
    cue: { fr: "Les hanches au sol, la poitrine soulevée, les épaules basses, les coudes légèrement fléchis.", en: "The hips on the floor, the chest lifted, the shoulders low, the elbows slightly bent." },
    said: { fr: "Soulevez la poitrine", en: "Lift the chest" },
    marks: [
      mark(["Jambes jointes", "Jambes jointes, dessus des pieds au sol"], ["Legs together", "Legs together, tops of the feet on the floor"], spot(Point.ankle, M), [0, 0.28, 0.22]),
      mark(["Épaules basses", "Épaules basses, loin des oreilles"], ["Shoulders low", "Shoulders low, away from the ears"], spot(Point.shoulder, R), [-0.3, 0.3, 0.15]),
      mark(["Coudes fléchis", "Coudes légèrement fléchis, près du corps"], ["Elbows bent", "Elbows slightly bent, close to the body"], spot(Point.elbow, R), [0.4, 0, 0.2],
        [{ angle: { at: spot(Point.elbow, R), from: spot(Point.shoulder, R), to: spot(Point.wrist, R), radius: 0.09 } }]),
      mark(["Regard en haut", "Regard vers le haut et l’arrière"], ["Look up", "Look up and back"], spot(Point.head), [0.3, 0.25, 0]),
    ],
    shape: {
      pelvis: [-0.21, 0.15], spine: [35, 80, 85, 100], arms: planted, rests: [BodyRest.hands, BodyRest.pelvis],
      legs: { at: [-1.06, 0.035, 0.05], foot: -180, toes: -180, rests: [LegRest.instep, LegRest.knee] },
    },
  },
  {
    id: "adho-mukha-svanasana", sanskrit: "Adho Mukha Svanasana", name: { fr: "Chien tête en bas", en: "Downward-facing dog" },
    level: Level.dog,
    cue: { fr: "Les hanches hautes, le corps en V à l’envers, les talons vers le sol, la tête entre les bras.", en: "The hips high, the body an upside-down V, the heels toward the floor, the head between the arms." },
    said: { fr: "Hanches hautes, talons vers le sol", en: "Hips high, heels down" },
    marks: [
      mark(["Mains, épaules, hanches", "Mains, épaules et hanches sur une même ligne"], ["Hands, shoulders, hips", "Hands, shoulders and hips in one line"], spot(Point.shoulder, R), [0.45, -0.12, 0.3],
        [{ line: [spot(Point.wrist, R), spot(Point.shoulder, R), spot(Point.pelvis)], dashed: true }]),
      mark(["Hanches hautes", "Hanches hautes : l’angle entre bras et jambes approche 90°"], ["Hips high", "Hips high: the angle between arms and legs nears 90°"], spot(Point.pelvis), [0, 0.32, 0.1],
        [{ angle: { at: spot(Point.pelvis), from: spot(Point.shoulders), to: spot(Point.ankle, M), radius: 0.17 } }]),
      mark(["Talons vers le sol", "Talons poussés vers le sol"], ["Heels down", "Heels pressed toward the floor"], spot(Point.heel, M), [-0.25, 0.18, 0.2]),
      mark(["Tête entre les bras", "Tête relâchée entre les bras"], ["Head between the arms", "Head relaxed between the arms"], spot(Point.head), [0.3, -0.05, 0.3]),
    ],
    shape: {
      pelvis: [-0.655, 0.77], spine: [-47, -47, -55, -62], arms: planted, rests: [BodyRest.hands],
      legs: { at: [-1.19, 0.09, 0.1], foot: -12, toes: 0, rests: [LegRest.foot] },
    },
  },
  {
    id: "tadasana", sanskrit: "Tadasana", name: { fr: "Posture de la montagne", en: "Mountain pose" },
    level: Level.standing,
    cue: { fr: "Debout, pieds joints, bras le long du corps, le sommet de la tête vers le ciel.", en: "Stand with the feet together, the arms by the sides, the crown of the head toward the sky." },
    said: { fr: "Debout, bras le long du corps", en: "Stand tall, arms down" },
    marks: [
      mark(["Pieds joints", "Pieds joints, poids réparti entre talons et orteils"], ["Feet together", "Feet together, weight between heels and toes"], spot(Point.ball, M), [0.25, 0.12, 0.25]),
      mark(["Bras le long du corps", "Bras le long du corps, doigts vers le sol"], ["Arms by the sides", "Arms by the sides, fingers toward the floor"], spot(Point.wrist, R), [0.3, 0.05, 0.2]),
      mark(["Sommet de la tête au ciel", "Le sommet de la tête monte, la nuque s’allonge"], ["Crown to the sky", "The crown of the head rises, the neck lengthens"], spot(Point.head), [0.3, 0.15, 0],
        [{ arrow: [spot(Point.head, undefined, { shift: [0, 0.12, 0] }), spot(Point.head, undefined, { shift: [0, 0.4, 0] })] }]),
      mark(["Colonne droite", "Oreilles, épaules, hanches et chevilles alignées"], ["Spine straight", "Ears, shoulders, hips and ankles in line"], spot(Point.waist), [-0.35, 0.05, 0.1],
        [{ line: [spot(Point.head), spot(Point.shoulders), spot(Point.pelvis), spot(Point.ankle, M)], dashed: true }]),
    ],
    shape: { pelvis: [0, 0.93], spine: [90, 90, 90, 90], legs: together, arms: { at: [0.03, 0.86, 0.2], hand: -90, palm: 1 } },
  },
  {
    id: "balasana", sanskrit: "Balasana", name: { fr: "Posture de l’enfant", en: "Child’s pose" },
    level: Level.kneeling,
    cue: { fr: "Assis sur les talons, le front au sol, les bras allongés devant vous : laissez le dos s’arrondir.", en: "Sit back on the heels, the forehead on the floor, the arms long in front: let the back round." },
    said: { fr: "Front au sol, détendez le dos", en: "Forehead down, back soft" },
    marks: [
      mark(["Fesses sur les talons", "Les fesses descendent vers les talons"], ["Hips on the heels", "The hips sink toward the heels"], spot(Point.pelvis), [-0.2, 0.3, 0.15],
        [{ line: [spot(Point.pelvis), spot(Point.heel, M)], dashed: true }]),
      mark(["Front au sol", "Le front repose au sol, la nuque longue"], ["Forehead down", "The forehead rests on the floor, the neck long"], spot(Point.head), [0.25, 0.25, 0.1],
        [{ dot: spot(Point.head, undefined, { floor: true }) }]),
      mark(["Bras allongés devant", "Bras allongés devant, paumes au sol"], ["Arms long in front", "Arms long in front, palms on the floor"], spot(Point.wrist, R), [0.25, 0.15, 0.25],
        [{ dot: spot(Point.wrist, L) }, { dot: spot(Point.wrist, R) }]),
      mark(["Dos arrondi, relâché", "Laissez le dos s’arrondir et respirez dedans"], ["Back round and soft", "Let the back round and breathe into it"], spot(Point.sternum), [0, 0.3, 0.1]),
    ],
    shape: {
      pelvis: [-0.86, 0.34], spine: [10, -20, -60, -70], arms: planted, rests: [BodyRest.hands, BodyRest.head],
      legs: { at: [-0.9, 0.035, 0.09], foot: -180, toes: -180, rests: [LegRest.instep, LegRest.knee] },
    },
  },
  {
    id: "marjaryasana", sanskrit: "Marjaryasana", name: { fr: "Posture du chat", en: "Cat pose" },
    level: Level.allFours,
    cue: { fr: "À quatre pattes, mains sous les épaules, genoux sous les hanches : arrondissez le dos, le menton vers la poitrine.", en: "On all fours, the hands under the shoulders, the knees under the hips: round the back, the chin toward the chest." },
    said: { fr: "Arrondissez le dos", en: "Round the back" },
    marks: [
      mark(["Mains sous les épaules", "Poignets sous les épaules, bras tendus"], ["Hands under the shoulders", "Wrists under the shoulders, arms straight"], spot(Point.shoulder, R), [0.3, 0.15, 0.25],
        [{ plumb: spot(Point.shoulder, R) }]),
      mark(["Genoux sous les hanches", "Genoux sous les hanches, écartés de la largeur du bassin"], ["Knees under the hips", "Knees under the hips, hip-width apart"], spot(Point.hip, R), [-0.3, 0.15, 0.25],
        [{ plumb: spot(Point.hip, R) }]),
      mark(["Dos arrondi", "Arrondissez le dos vers le plafond, en expirant"], ["Back rounded", "Round the back up toward the ceiling, breathing out"], spot(Point.sternum), [0, 0.35, 0.1],
        [{ arrow: [spot(Point.sternum, undefined, { shift: [0, 0.12, 0] }), spot(Point.sternum, undefined, { shift: [0, 0.32, 0] })] }]),
      mark(["Menton vers la poitrine", "La tête se relâche, le menton vers la poitrine"], ["Chin to the chest", "The head drops, chin toward the chest"], spot(Point.head), [0.3, -0.05, 0.2]),
    ],
    shape: {
      pelvis: [-0.47, 0.5], spine: [20, -12, -50, -70], arms: planted, rests: [BodyRest.hands],
      legs: { at: [-0.9, 0.035, 0.09], foot: -180, toes: -180, rests: [LegRest.instep, LegRest.knee] },
    },
  },
  {
    id: "bitilasana", sanskrit: "Bitilasana", name: { fr: "Posture de la vache", en: "Cow pose" },
    level: Level.allFours,
    cue: { fr: "À quatre pattes, creusez le dos, ouvrez la poitrine et regardez vers le haut.", en: "On all fours, let the belly drop, open the chest and look up." },
    said: { fr: "Creusez le dos, regard haut", en: "Drop the belly, look up" },
    marks: [
      mark(["Mains sous les épaules", "Poignets sous les épaules, bras tendus"], ["Hands under the shoulders", "Wrists under the shoulders, arms straight"], spot(Point.shoulder, R), [0.3, 0.15, 0.25],
        [{ plumb: spot(Point.shoulder, R) }]),
      mark(["Genoux sous les hanches", "Genoux sous les hanches, écartés de la largeur du bassin"], ["Knees under the hips", "Knees under the hips, hip-width apart"], spot(Point.hip, R), [-0.3, 0.15, 0.25],
        [{ plumb: spot(Point.hip, R) }]),
      mark(["Ventre vers le sol", "Le ventre descend, le dos se creuse, en inspirant"], ["Belly toward the floor", "The belly drops, the back arches, breathing in"], spot(Point.waist), [0, 0.3, 0.15],
        [{ arrow: [spot(Point.waist, undefined, { shift: [0, 0.05, 0] }), spot(Point.waist, undefined, { shift: [0, -0.15, 0] })] }]),
      mark(["Regard vers le haut", "Poitrine ouverte, regard vers le haut"], ["Look up", "Chest open, looking up"], spot(Point.head), [0.3, 0.25, 0]),
    ],
    shape: {
      pelvis: [-0.47, 0.5], spine: [-8, 18, 45, 55], arms: planted, rests: [BodyRest.hands],
      legs: { at: [-0.9, 0.035, 0.09], foot: -180, toes: -180, rests: [LegRest.instep, LegRest.knee] },
    },
  },
]
