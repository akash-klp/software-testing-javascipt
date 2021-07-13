var n1=prompt("Enter the first positive number");
var n2=prompt("Enter the second positive number");
var n3=prompt("Enter the third positive number");
var istriangle;

n1=Number(n1);
n2=Number(n2);
n3=Number(n3);

do
{
	c1=n1>=1 && n1<=10;
	c2=n2>=1 && n2<=10;
	c3=n3>=1 && n3<=10;
	
	if(!c1)
		alert("\n The value of n1 is not the range of permitted value");
	if(!c2)
		alert("\n The value of n2 is not the range of permitted value");
	if(!c3)
		alert("\n The value of n3 is not the range of permitted value");
	if(!c1 || !c2 || !c3)
	{
		exit(0);
	}
}while(!(c1 && c2 && c3))
	
if(n1>0 && n2>0 && n3>0)
{
	if(n1<n2+n3 && n2<n1+n3 && n3<n1+n2)
	{
		istriangle='y';
	}
	else
	{
		istriangle='n';
	}
	if(istriangle=='y')
	{
		if((n1==n2) && (n2==n3))
		{
			alert("Equilateral Triangle");
		}
		else if((n1!=n2)&& (n1!=n3) && (n2!=n3))
		{
			alert("Scalene Triangle");
		}
		else
		{
			alert("Isosceles Triangle");
		}
	}
	else
	{
		alert("Not a triangle");
	}
}
else
{
	alert("All the three numbers should be positive");
}

		
