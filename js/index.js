function  submitedData(event){
    event.preventDefault();
    //to open new window
    doc=open('','','width=400px,height=300px');

    var Name=document.form.name.value;
    var Email=document.form.email.value;
    var DOB=document.form.date.value;
    var Gender="";
    var Country=document.form.option.value;
    for(i=0; i<document.form.gender.length;i++){
        if(document.form.gender[i].checked){
            Gender=document.form.gender[i].value;
        }
    }
    var Course="";
    for(i=0; i<document.form.course.length;i++){
        if(document.form.course[i].checked){
            Course+=document.form.course[i].value+", "
        }
    }

    with (doc.document){
        write("<title>Registration Form</title>")
        write("<body style='background-color:lightgray; font-weight:bold; font-size:20px'>")

        write("Name:    "+Name);
        write("<br>");
        write("Email:    "+Email);
        write("<br>");
        
        write("DOB :    "+DOB);
        write("<br>");
        write("Gender:    "+Gender);
        write("<br>");
        write("Course:    "+Course);
        write("<br>");
        write("Country:    "+Country);
        

    }

    
}