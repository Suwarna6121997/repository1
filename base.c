
#include <stdio.h>
int sb,db;
char input[10];
//int validation(int sbb,char[] input);
void validation(int sbb,char input[])
{
    int i,j,f=0;
  char arr[32]= {'0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v'};  
 
 
  for(i=0;input[i]!='\0';i++)
  {
      f=0;
     for(j=0;j<sb;j++)
     {
       if(arr[i]==input[j])  
       {
       f=1;                             //present in array
       }
     }
     
     if(f==0)
     printf("invalid");
     break;
  } 
}
int main()
{
   printf("enter source base") ;
   scanf("%d",&sb);
   printf("enter source base") ;
   scanf("%d",&db);
   printf("enter input") ;
   scanf("%s",input); 
   void validation(int sbb,char input[]);
}