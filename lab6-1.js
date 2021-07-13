var month=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var d,m,y,nd,nm,ny,ndays;
d=Number(prompt("Enter the date"));
m=Number(prompt("Enter the month"));
y=Number(prompt("Enter the year"));
if(m>=1 && m<=12)
{
	ndays=[m-1];
}
else{
	ndays=0;
}

if(m==2)
{
	if(y%100==0)
	{
		if(y%400==0)
		{
			ndays=29;
		}
	}
	else{
		if(y%4==0)
		ndays=29;
	}
}

do{
	var c1=m>=1 && m<=12;
	var c2=d>=1 && d<=31;
	var c3=y>=1812 && y<=2021;	
	if(!c3)
	{
		alert("Invalid input Year");
	}

	if(!c2)       
	{
		alert("Invalid input day");
	}

	if(!c1)
	{
		alert("Invalid input Month");
	}
	if(!c1 || !c2 || !c3){
		document.write("Terminate the program");
		exit(0);
	}
}while(!c1 || !c2 || !c3)

nd=d+1;
nm=m;
ny=y;
if(nd>ndays)
{
	nd=1;
	nm++;
}
if(nm>12)
{
	nm=1;
	ny++;
	if(ny>2021){
		alert("Year out of range");
		exit(0);
	}
}
document.write("\n Given date is "+d+"/"+m+"/"+y+"<br/>");
document.write("\n next day's date is " +nd+"/"+nm+"/"+ny);