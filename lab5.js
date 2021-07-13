var locks,stocks,barrels,tlocks,tstocks,tbarrels,lprice,sprice,bprice,lsales,ssales,bsales,sales,comm;

lprice=45.0;
sprice=30.0;
bprice=25.0;
tlocks=0;
tstocks=0;
tbarrels=0;

locks=Number(prompt("Enter the number of locks and to exit the loop enter -1 for locks"));

while(locks!=-1)
{
	var stocks=Number(prompt("Enter the number of stocks"));
	var barrels=Number(prompt("Enter the number of barrels"));
	do
	{
		c1=locks>0 && locks<=70;
		c2=stocks>0 && stocks<=80;
		c3=barrels>0 && barrels<=90;
		
		if(!c1)
		{
			alert("Display locks out of range should be of the range 1-70..");
		}
		if(!c2)
		{
			alert("Display stocks out of range should be of the range 1-80..");
			
		}
		if(!c3)
		{
			alert("Display barrels out of range should be of the range 1-90..");
			
		}
	if(!c1 || !c2 || !c3)
		{
			exit(0);
		}
	
	}while(!c1 && !c2 && !c3);
	
	tlocks=tlocks+locks;
	tstocks=tstocks+stocks;
	tbarrels=tbarrels+barrels;
	
	var locks=Number(prompt("Enter the number of locks and to exit the loop enter -1"));
	
	if(tlocks<1 || tlocks>70 || tstocks<1 || tstocks>80 || tbarrels<1 || tbarrels>90)
	{
		document.write("Terminate the program");
		exit(0);
	}
}

alert("total locks= "+" "+ tlocks);
alert("total stocks= "+" "+ tstocks);
alert("total barrels= "+" "+ tbarrels);

lsales=lprice*tlocks;
ssales=sprice*tstocks;
bsales=bprice*tbarrels;

sales=lsales+ssales+bsales;

alert("The total sales= "+""+sales);

if(sales>=100)
{
	if(sales>1800.0)
	{
		comm=0.10*1000.0;
		comm=comm+0.15*800.0;
		comm=comm+0.20*(sales-1800.0);
	}
	
	else if(sales>1000)
	{
		comm=0.10*1000.0;
		comm=comm+0.15*(sales-1000.0);
	}
	else{
		comm=0.10*sales;
	}
	
	document.write("The commission is : "+"" + comm);
}
else
	document.write("no sales");