document.getElementById("task1").addEventListener("click",
    function(event){
      event.preventDefault();


      const maintask=document.getElementById("navtask").innerText;
      const convertmaintask=parseInt(maintask);

      const add=convertmaintask+1;
      document.getElementById("navtask").innerText=add;
      document.getElementById("task1").disabled = true;
      alert("Board update Successful") 
    })


    document.getElementById("task2").addEventListener("click",
        function(event){
          event.preventDefault();
    
    
          const maintask=document.getElementById("navtask").innerText;
          const convertmaintask=parseInt(maintask);
    
          const add=convertmaintask+1;
          document.getElementById("navtask").innerText=add;
        document.getElementById("task2").disabled=true
        alert("Board update Successful") 
        })


        document.getElementById("task3").addEventListener("click",
            function(event){
              event.preventDefault();
        
        
              const maintask=document.getElementById("navtask").innerText;
              const convertmaintask=parseInt(maintask);
        
              const add=convertmaintask+1;
              document.getElementById("navtask").innerText=add;
            
             document.getElementById("task3").disabled=true;

             alert("Board update Successful") 
            })

            document.getElementById("task4").addEventListener("click",
                function(event){
                  event.preventDefault();
            
            
                  const maintask=document.getElementById("navtask").innerText;
                  const convertmaintask=parseInt(maintask);
            
                  const add=convertmaintask+1;
                  document.getElementById("navtask").innerText=add;
                  document.getElementById("task4").disabled=true;
                  alert("Board update Successful") 
                })

                document.getElementById("task5").addEventListener("click",
                    function(event){
                      event.preventDefault();
                
                
                      const maintask=document.getElementById("navtask").innerText;
                      const convertmaintask=parseInt(maintask);
                
                      const add=convertmaintask+1;
                      document.getElementById("navtask").innerText=add;
                      document.getElementById("task5").disabled=true;
                      alert("Board update Successful") 
                    })

                    document.getElementById("task6").addEventListener("click",
                        function(event){
                          event.preventDefault();
                    
                    
                          const maintask=document.getElementById("navtask").innerText;
                          const convertmaintask=parseInt(maintask);
                    
                          const add=convertmaintask+1;
                          document.getElementById("navtask").innerText=add;
                          document.getElementById("task6").disabled=true;
                          alert("Board update Successful") 
                        })