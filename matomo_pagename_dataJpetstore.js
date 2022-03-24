/*
This variable needs to be defined before the functions in "matomo_pagename_functions.js"
*/
var leanapmPathData = {
    "/jpetstore/" : {
        "":"JPetStore - Entrée du shop"
    },
    "/jpetstore/actions/Catalog.action" : {
        "" : "Accueil",
        "viewCategory" : {
            "categoryId" : "JPetStore - Catégorie $categoryId"
        },
        "viewProduct" : {
            "productId" : "JPetStore - Produit $productId"
        },
        "viewItem" : {
            "itemId" : "JPetStore - Item $itemId"
        }
    },
    "/jpetstore/actions/Cart.action" : {
        "viewCart" : "JPetStore - Panier",
        "addItemToCart" : {
            "workingItemId" : "JPetStore - Panier après ajout de l'item $workingItemId"
        },
        "" : "JPetStore - Panier après update",
        "removeItemFromCart" : {
            "workingItemId" : "JPetStore - Panier après suppression de l'item $workingItemId"
        }
    },
    "/jpetstore/actions/Account.action" : {
        "signonForm" : "JPetStore - Page de connexion",
        "jsessionid" : {
            "signonForm" : "JPetStore - Page de connexion"
        },
        "" : "JPetStore - Page de connexion après tentative échouée OU Page du compte après modif",
        "editAccountForm" : "JPetStore - Page du compte"
    },
    "/jpetstore/actions/Order.action" : {
        "listOrders" : "JPetStore - Liste des commandes",
        "newOrderForm" : "JPetStore - Détails des payements",
        "" : "JPetStore - Demande de confirmation",
        "newOrder" : {
            "confirmed" : "JPetStore - Commande confirmée"
        }
    }
};