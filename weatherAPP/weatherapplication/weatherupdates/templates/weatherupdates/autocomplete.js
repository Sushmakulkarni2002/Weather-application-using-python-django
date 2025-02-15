let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
const resultbox= document.queryselector("result-box");
const inputbox =document.querySelector("input-box")

inputbox.onkeyup=function(){
    let result =[];
    let input= inputbox.value;
    if(input.length){
        result=suggestions.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
        }

        display(result);
        if(!result.length){
         resultbox.innerHTML='';   
        }
    }

    function display(result){
        const content =result.map((list)=>{
            return "<li onclick=selectInput(this)>" + list + "<li>";

        });

        resultbox.innerHTML="<ul>" + content.join('') + "</ul>";
    }

    function selectInput(list){
     inputbox.value = list.innerHTML;
     resultbox.innerHTML  = ''; 
    }




