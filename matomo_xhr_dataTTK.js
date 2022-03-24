/*
This variable needs to be defined before the functions in "matomo_xhr_functions.js"
*/
var leanapmXhrData = {
    "GET timetracker/imputations/timesheet/$/$/$" : {
        "POST timetracker/imputations/timesheet/daysoff/$/$/$" : "Affichage du mois $var$1$4$"
        //  timetracker/imputations/timesheet/daysoff/(numeroMois)/(numeroAnnée)/(nomConsultant)
    },
    "PUT timetracker/imputations/editImputations/$" : {
        "DELETE timetracker/imputations/deleteImputations/$" : {
            "PUT timetracker/imputations/saveGrid/$/$/$" : "Enregistrer"
        }
    },
    "GET timetracker/clients/dropdown/$/$/$" : {
        "POST timetracker/projets/projetsDropdown/$/$/$/$" : {
            "POST timetracker/taches/tachesNonImputeesByProjetEtMoisAnnee/$/$/$" : "Clic sur Add"
        },
        "GET timetracker/clients/dropdown/$/$/$" : {
            "POST timetracker/projets/projetsDropdown/$/$/$/$" : {
                "POST timetracker/projets/projetsDropdown/$/$/$/$" : {
                    "POST timetracker/taches/tachesNonImputeesByProjetEtMoisAnnee/$/$/$" : {
                        "POST timetracker/taches/tachesNonImputeesByProjetEtMoisAnnee/$/$/$" : "Clic sur Add"
                    }
                }
            }
        }
    },
    "POST timetracker/imputations/newTaskToImput" : "Confirmation Add",
    "POST timetracker/taches/tachesNonImputeesByProjetEtMoisAnnee/$/$/$" : "Clic sur Edit",
    "PUT timetracker/imputations/editTemp" : "Confirmation edit"
};