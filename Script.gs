function updateForm(){
  // call your form and connect to the drop-down item
  var form = FormApp.openById("1BJcILk06GuMGnLjqnEiDQJU4oDx9ZVp5N9ilQguHh1c");
  
  
  var studentList = form.getItemById("199265753").asListItem();
  var staffList = form.getItemById("637262495").asListItem();
  var laptopList = form.getItemById("1191513063").asListItem();
  var cameraList = form.getItemById("1973389735").asListItem();
  var microList = form.getItemById("833865815").asListItem();
  var odList = form.getItemById("1905307449").asListItem();
  var cableList = form.getItemById("1737155623").asListItem();
  var accList = form.getItemById("1571894384").asListItem();
  var otherList = form.getItemById("1984611779").asListItem();
  

// identify the sheet where the data resides needed to populate the drop-down
  var ss1 = SpreadsheetApp.getActive();
  var student_names = ss1.getSheetByName("Name_List");
  var staff_names = ss1.getSheetByName("Name_List");
  var laptop_name = ss1.getSheetByName("Name_List");
  var camera_name = ss1.getSheetByName("Name_List");
  var micro_name = ss1.getSheetByName("Name_List");
  var od_name = ss1.getSheetByName("Name_List");
  var cable_name = ss1.getSheetByName("Name_List");
  var acc_name = ss1.getSheetByName("Name_List");
  var other_name = ss1.getSheetByName("Name_List");
  
  // grab the values in the first column of the sheet - use 2 to skip header row 
  var studentNamesValues = student_names.getRange(1, 1, 118).getValues();
  var staffNameValues = staff_names.getRange(1, 2, 13).getValues();
  var laptopNameValues = laptop_name.getRange(1, 4, 9).getValues();
  var camera_NameValues = laptop_name.getRange(1, 3, 12).getValues();
  var micro_NameValues = laptop_name.getRange(1, 5, 19).getValues();
  var od_NameValues = laptop_name.getRange(1, 6, 19).getValues();
  var cable_NameValues = laptop_name.getRange(1, 7, 19).getValues();
  var acc_NameValues = laptop_name.getRange(1, 8, 53).getValues();
  var other_NameValues = laptop_name.getRange(1, 9, 31).getValues();

  var studentNames = [];
  var staffNames = [];
  var laptopNames = [];
  var cameraNames = [];
  var microNames = [];
  var odNames = [];
  var cableNames = [];
  var accNames = [];
  var otherNames = [];

  // convert the array ignoring empty cells
  for(var i = 0; i < studentNamesValues.length; i++){
    if(studentNamesValues[i][0] != ""){
      studentNames[i] = studentNamesValues[i][0];
    }
  }

  for(var j = 0; j < staffNameValues.length; j++){    
    if(staffNameValues[j][0] != ""){
      staffNames[j] = staffNameValues[j][0];
    }
  }
  
  for(var z = 0; z < laptopNameValues.length; z++){    
    if(laptopNameValues[z][0] != ""){
      laptopNames[z] = laptopNameValues[z][0];
    }
  }
  
  for(var z = 0; z < camera_NameValues.length; z++){    
    if(camera_NameValues[z][0] != ""){
      cameraNames[z] = camera_NameValues[z][0];
    }
  }
  
  for(var z = 0; z < micro_NameValues.length; z++){    
    if(micro_NameValues[z][0] != ""){
      microNames[z] = micro_NameValues[z][0];
    }
  }
  
  for(var z = 0; z < od_NameValues.length; z++){    
    if(od_NameValues[z][0] != ""){
      odNames[z] = od_NameValues[z][0];
    }
  }
  
  for(var z = 0; z < cable_NameValues.length; z++){    
    if(cable_NameValues[z][0] != ""){
      cableNames[z] = cable_NameValues[z][0];
    }
  }
  
  for(var z = 0; z < acc_NameValues.length; z++){    
    if(acc_NameValues[z][0] != ""){
      accNames[z] = acc_NameValues[z][0];
    }
  }
  
  for(var z = 0; z < other_NameValues.length; z++){    
    if(other_NameValues[z][0] != ""){
      otherNames[z] = other_NameValues[z][0];
    }
  }
  
  // populate the drop-down with the array data
  studentList.setChoiceValues(studentNames);
  staffList.setChoiceValues(staffNames);
  laptopList.setChoiceValues(laptopNames);
  cameraList.setChoiceValues(cameraNames);
  microList.setChoiceValues(microNames);
  odList.setChoiceValues(odNames);
  cableList.setChoiceValues(cableNames);
  accList.setChoiceValues(accNames);
  otherList.setChoiceValues(otherNames);
}
