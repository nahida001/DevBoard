//task1

document.getElementById("task1").addEventListener("click",
    function(event){
      event.preventDefault();


      const maintask=document.getElementById("task").innerText;
      const convertmaintask=parseInt(maintask);
      const fixed1=document.getElementById("fix").innerText;

      const sub=convertmaintask-1;
      document.getElementById("task").innerText=sub;
    const container=document.getElementById("history_add")
    const div=document.createElement("div")
    div.classList.add("bg-red-400")
    div.classList.add("p-2")
    div.classList.add("rounded-lg")
    div.innerHTML =`
             <h1 class="text-black">you have complete the task ${fixed1} </h1>
    `
    container.appendChild(div)

   
        
    })

//task2
    document.getElementById("task2").addEventListener("click",
        function(event){
          event.preventDefault();
    
          const fixed2=document.getElementById("dark_mode").innerText;
          const maintask=document.getElementById("task").innerText;
          const convertmaintask=parseInt(maintask);
    
          const sub=convertmaintask-1;
          document.getElementById("task").innerText=sub;
          const container=document.getElementById("history_add")
          const div=document.createElement("div")
          div.classList.add("bg-red-400")
          div.classList.add("p-2")
          div.classList.add("rounded-lg")
          div.innerHTML =`
                   <h1 class="text-black">you have complete the task ${fixed2} </h1>
          `
          container.appendChild(div)
      
    
        })

//task3
        document.getElementById("task3").addEventListener("click",
            function(event){
              event.preventDefault();
        
              const fixed3=document.getElementById("Optimize").innerText;
              const maintask=document.getElementById("task").innerText;
              const convertmaintask=parseInt(maintask);
        
              const sub=convertmaintask-1;
              document.getElementById("task").innerText=sub;
            
              const container=document.getElementById("history_add")
              const div=document.createElement("div")
              div.classList.add("bg-red-400")
              div.classList.add("p-2")
              div.classList.add("rounded-lg")
              div.innerHTML =`
                       <h1 class="text-black">you have complete the task ${fixed3} </h1>
              `
              container.appendChild(div)
            })

            //task4

            document.getElementById("task4").addEventListener("click",
                function(event){
                  event.preventDefault();
            
                  const fixed4=document.getElementById("emoji").innerText;
                  const maintask=document.getElementById("task").innerText;
                  const convertmaintask=parseInt(maintask);
            
                  const sub=convertmaintask-1;
                  document.getElementById("task").innerText=sub;
                
                  const container=document.getElementById("history_add")
                  const div=document.createElement("div")
                  div.classList.add("bg-red-400")
                  div.classList.add("p-2")
                  div.classList.add("rounded-lg")
                  div.innerHTML =`
                           <h1 class="text-black">you have complete the task ${fixed4} </h1>
                  `
                  container.appendChild(div)
                })

              //  task5
                document.getElementById("task5").addEventListener("click",
                    function(event){
                      event.preventDefault();
                
                      const fixed5=document.getElementById("OpenAI").innerText;
                      const maintask=document.getElementById("task").innerText;
                      const convertmaintask=parseInt(maintask);
                
                      const sub=convertmaintask-1;
                      document.getElementById("task").innerText=sub;
                      const container=document.getElementById("history_add")
                      const div=document.createElement("div")
                      div.classList.add("bg-red-400")
                      div.classList.add("p-2")
                      div.classList.add("rounded-lg")
                      div.innerHTML =`
                               <h1 class="text-black">you have complete the task ${fixed5} </h1>
                      `
                      container.appendChild(div)
                
                    })


                    //task6
                    document.getElementById("task6").addEventListener("click",
                        function(event){
                          event.preventDefault();
                    
                          const fixed6=document.getElementById("Improve").innerText;
                          const maintask=document.getElementById("task").innerText;
                          const convertmaintask=parseInt(maintask);
                    
                          const sub=convertmaintask-1;
                          document.getElementById("task").innerText=sub;
                        
                          const container=document.getElementById("history_add")
                          const div=document.createElement("div")
                          div.classList.add("bg-red-400")
                          div.classList.add("p-2")
                          div.classList.add("rounded-lg")
                          div.innerHTML =`
                                   <h1 class="text-black">you have complete the task ${fixed6} </h1>
                          `
                          container.appendChild(div)
                         
                        })