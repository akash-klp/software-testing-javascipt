var month=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
var d,m,y,nd,nm,ny,ndays;
d=Number(prompt("Enter the date"));
m=Number(prompt("Enter the month"));
y=Number(prompt("Enter the year"));

ndays=month[m-1];

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

if(y<1812 || y>2021)
{
	alert("Invalid input Year");
	exit(0);
}

if(d<=0 || d>ndays)
{
	alert("Invalid input day");
	exit(0);
}

if(m<1 || m>12)
{
	alert("Invalid input Month");
	exit(0);
}

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
	if(ny>2021)
		alert("Year out of range");
}

document.write("\n Given date is "+d+"/"+m+"/"+y+"<br/>");
document.write("\n next day's date is " +nd+"/"+nm+"/"+ny);
