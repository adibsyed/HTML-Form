
var color1=document.getElementById("main1");
var color2=document.getElementById("main2");
var border=document.getElementById("reset");

// to give color effect to heading of page
setInterval(() => {
    color1.style.color="green";
    
}, 1*1000);

setInterval(() => {
    color1.style.color="red";
    
}, 2*1000);

setInterval(() => {
    color1.style.color="yellow";
    
}, 3*1000);

setInterval(() => {
    color2.style.color="yellow";
    
}, 1*1000);

setInterval(() => {
    color2.style.color="green";
    
}, 2*1000);

setInterval(() => {
    color2.style.color="red";
    
}, 3*1000);


// to give border effect to the registration form
setInterval(() => {
    border.style.boxShadow="0px 0px 50px yellow"
    
}, 1*1000);

setInterval(() => {
    border.style.boxShadow="0px 0px 50px lawngreen";
    
}, 2*1000);



var num=1;

function myFunction(){
    
var fn=document.getElementById("firstname").value;
var ln=document.getElementById("lastname").value;
var add=document.getElementById("add").value;
var pincode=document.getElementById("pin").value;

var state=document.getElementById("state").value;
var country=document.getElementById("count").value;

var ele = document.getElementsByName('gender');
      
    // code to append gender into the table
    var gender="",count1=0;
    for(i = 0; i < ele.length; i++) 
    {
        if(ele[i].checked)
        {
        count1++;
         gender = ele[i].value;
        }
    }    


    // code to append choice of food into table
    var food="";count=0
    var element = document.getElementsByName('food');
      
      
    for(i = 0; i < element.length; i++) 
    {
        if(element[i].checked){
        count++;
         food += element[i].value+",";
        }
    }   
    

    // code for the required fields
    if(fn=="")
        {
            alert("please enter first name");
            
            return
        }
        
        if(ln=="")
        {
            alert("please enter lastname");
            
            return
        }
        
        if(add=="")
        {
             alert("please enter address");
             
             return
        }

        if(pincode=="")
        {
            alert("please enter pincode");
            
            return
        }

         
         
         if(count1===0)
        {
            alert("please choose gender");
            
            return
        }

         if (count<2){
            alert("plz enter two choice of food");
           
            return
            }
         
        if(state=="")
        {
            alert("please enter state");

            return
        }
         
        if(country=="")
        {
            alert("please enter country");

           return
        }

         
// code to append all the data into the table
if(num==1)
{
    document.getElementById("td1").innerHTML=num;
    document.getElementById("fn1").innerHTML=fn;
    document.getElementById("ln1").innerHTML=ln;
    document.getElementById("address1").innerHTML=add;
    document.getElementById("pincode1").innerHTML=pincode;
    document.getElementById("gen1").innerHTML=gender;
    document.getElementById("cof1").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat1").innerHTML=state;
    document.getElementById("country1").innerHTML=country;
}

if(num==2)
{
    document.getElementById("td2").innerHTML=num; 
    document.getElementById("fn2").innerHTML=fn;
    document.getElementById("ln2").innerHTML=ln;
    document.getElementById("address2").innerHTML=add;
    document.getElementById("pincode2").innerHTML=pincode;
    document.getElementById("gen2").innerHTML=gender;
    document.getElementById("cof2").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat2").innerHTML=state;
    document.getElementById("country2").innerHTML=country;
}
if(num==3)
{
    document.getElementById("td3").innerHTML=num;
    document.getElementById("fn3").innerHTML=fn;
    document.getElementById("ln3").innerHTML=ln;
    document.getElementById("address3").innerHTML=add;
    document.getElementById("pincode3").innerHTML=pincode;
    document.getElementById("gen3").innerHTML=gender;
    document.getElementById("cof3").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat3").innerHTML=state;
    document.getElementById("country3").innerHTML=country;
}

if(num==4)
{
    document.getElementById("td4").innerHTML=num;
    document.getElementById("fn4").innerHTML=fn;
    document.getElementById("ln4").innerHTML=ln;
    document.getElementById("address4").innerHTML=add;
    document.getElementById("pincode4").innerHTML=pincode;
    document.getElementById("gen4").innerHTML=gender;
    document.getElementById("cof4").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat4").innerHTML=state;
    document.getElementById("country4").innerHTML=country;
}

if(num==5)
{
    document.getElementById("td5").innerHTML=num;
    document.getElementById("fn5").innerHTML=fn;
    document.getElementById("ln5").innerHTML=ln;
    document.getElementById("address5").innerHTML=add;
    document.getElementById("pincode5").innerHTML=pincode;
    document.getElementById("gen5").innerHTML=gender;
    document.getElementById("cof5").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat5").innerHTML=state;
    document.getElementById("country5").innerHTML=country;
}

if(num==6)
    {
    document.getElementById("td6").innerHTML=num;
    document.getElementById("fn6").innerHTML=fn;
    document.getElementById("ln6").innerHTML=ln;
    document.getElementById("address6").innerHTML=add;
    document.getElementById("pincode6").innerHTML=pincode;
    document.getElementById("gen6").innerHTML=gender;
    document.getElementById("cof6").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat6").innerHTML=state;
    document.getElementById("country6").innerHTML=country;
}

if(num==7)
{
    document.getElementById("td7").innerHTML=num;
    document.getElementById("fn7").innerHTML=fn;
    document.getElementById("ln7").innerHTML=ln;
    document.getElementById("address7").innerHTML=add;
    document.getElementById("pincode7").innerHTML=pincode;
    document.getElementById("gen7").innerHTML=gender;
    document.getElementById("cof7").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat7").innerHTML=state;
    document.getElementById("country7").innerHTML=country;
}

if(num==8)
{
    document.getElementById("td8").innerHTML=num;
    document.getElementById("fn8").innerHTML=fn;
    document.getElementById("ln8").innerHTML=ln;
    document.getElementById("address8").innerHTML=add;
    document.getElementById("pincode8").innerHTML=pincode;
    document.getElementById("gen8").innerHTML=gender;
    document.getElementById("cof8").innerHTML=food.replace(/,\s*$/,"");
    document.getElementById("stat8").innerHTML=state;
    document.getElementById("country8").innerHTML=country;
}

document.getElementById("reset").reset();

num++;
}
