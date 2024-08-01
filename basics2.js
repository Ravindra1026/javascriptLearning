const flag = true;

if (!flag)
{
    console.log("Condition Satisfied");
}
else
{
    console.log("Condition not Satisfied")
}

//while loop
i=0;
while (i>10)
{
    i++
    console.log(i)
}
console.log("=====================================")
//DO while loop 
do
{ 
i++
}while(i>10);

console.log(i)
console.log("=============================")
// For loop 
for (k=0;k<=5;k++)
{
    console.log(k);
}
console.log("*******************************")
//From 1 to 10 give me comman multiple of 2 and 5

for(k=1; k<=10;k++)
{
    if (k%2==0 && k%5==0)
    {
        console.log(k)
    }
}