export default {
    '[SG8]-Sciences de base (Mathématiques)': {
        PBS2: {
            /*
             *  QCMs => 40% de la note
             *  Chaque exam => 30%
             */
            0: 3, // DM stats
            1: 3, // Exam probas
            2: 3, // Exam stats
            3: 1, // QCMs proba (3 / 4 * 1)
        },
        // TODO: ERO2: QCM 1 et 2 -> 40% de la note, 60% pour le projet
    },
    'Culture de l\'Ingénieur & Electronique': {
        AUT1: {
            _subject: 1,
        },
        AUT2: {
            _subject: 1,
        },
        ELEC: {
            _subject: 2,
        },
    },
    'Architecture et Noyaux Systèmes': {
        IOTG: {
            _subject: 1
        },
        DRIL: {
            _subject: 1
        },
        HTS: {
            _subject: 3
        },
    },
    'Architecture des Systèmes Embarqués Temps Réel': {
        APAS: { // TODO: Check id
            _subject: 1
        },
        ARINC: { // TODO: Check id
            _subject: 2
        },
        VHDL: {
            _subject: 2
        },
    },
    'Programmation Systèmes': {
        ARM_SI8: {
            _subject: 1
        },
        TELE_S8: {
            _subject: 1
        },
        PFE_GISTRE8: { // TODO: Check id
            _subject: 2
        },
        IOT1: { // TODO: Check id
            _subject: 2
        },
    }
};
