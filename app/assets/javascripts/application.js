// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets
$(document).ready(function() {
$(".lil").hide();//on cherche dans categories le ul puis le .hide permet de cacher le contenue


i = 0;  //on met i = 0 comme si c'etait un bouton et que il cachez le contenue
$(".lol").eq(0).click(function () { // apres dans min home j'ai crée une class tableaux je selectionne le premmier du tableaux
//via to eq(0)(permet de prendre le premier element )le .click fonctionne comme un bouton
  if (i === 0) {
    $("#coco").find(".lil").eq(0).show();//le find recherche dans mon home le ul de la class categorie et le .show permet d'affichier quand on clique
    i = 1;//i = 1 permet d'afficher le tableaux quand on click dessus
              }
      else if (i === 1) {
        $("#coco").find(".lil").eq(0).hide();
        i = 0;
      }
      })

$(".lol").eq(1).click(function () {
  if (i === 0) {
      $("#coco").find(".lil").eq(1).show();
      i = 1;
                }
  else if (i === 1) {
    $("#coco").find(".lil").eq(1).hide();
    i = 0;
                    }
  })
  $(".lol").eq(2).click(function () {
    if (i === 0) {
        $("#coco").find(".lil").eq(2).show();
        i = 1;
                  }
    else if (i === 1) {
      $("#coco").find(".lil").eq(2).hide();
      i = 0;
                      }
    })
    $(".lol").eq(3).click(function () {
      if (i === 0) {
          $("#coco").find(".lil").eq(3).show();
          i = 1;
                    }
      else if (i === 1) {
        $("#coco").find(".lil").eq(3).hide();
        i = 0;
                        }
      })
      $(".lol").eq(4).click(function () {
        if (i === 0) {
            $("#coco").find(".lil").eq(4).show();
            i = 1;
                      }
        else if (i === 1) {
          $("#coco").find(".lil").eq(4).hide();
          i = 0;
                          }
        })
        $(".lol").eq(5).click(function () {
          if (i === 0) {
              $("#coco").find(".lil").eq(5).show();
              i = 1;
                        }
          else if (i === 1) {
            $("#coco").find(".lil").eq(5).hide();
            i = 0;
                            }
          })
$(".dropdown").find("a").hide();

  $(".dropdown").click(function () {
  if (i === 0) {
      $(".dropdown").find("a").show();
      i = 1;
                }
  else if (i === 1) {
    $(".dropdown").find("a").hide();
    i = 0;
                    }
  })

});
