
let count = 1;

$(document).ready(function(){
  let savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    $("#todolist").html(savedNotes);
  }

  $("#add").click(function(){
    let item = $("#text_item").val();
    let timestamp = new Date().toLocaleString(); // Отримати час створення нотатки
    $("#todolist").append(`<div class="Item Item${count}">${item}  <br><span class="timestamp">${timestamp}</span><br><button class="chg">change</button><br><button class="rem">remove</button></div>`)
    $("#text_item").val('');
    count++;
    localStorage.setItem('notes', $("#todolist").html());
  });

  $("html").on('click', '.rem', function () {
    
    $(this).parent('.Item').remove()

    localStorage.setItem('notes', $("#todolist").html());
  });

  $("html").on('click', '.chg', function () {
    let itemChg = $("#text_item").val();
    let data = $(this).parent('.Item').html()
    console.log(data)
    console.log(typeof(data))
    let newData = data.split("  ")
    console.log(newData);
    console.log(newData[0]);
    console.log(newData[1]);
    data=`${itemChg}  ${newData[1]}`
    console.log(data);
    $(this).parent('.Item').html(data)

    localStorage.setItem('notes', $("#todolist").html());
  });



  $("html").on("click", ".Item", function () {
    if ($($(this)).hasClass("archive")) {
      $(this).removeClass("archive")
    } else {
      $(this).addClass("archive");
    }
  });
});
