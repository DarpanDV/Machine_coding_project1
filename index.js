(async function(){
    const data=await fetch('data.json');
    const res=await data.json();
    
    const employees=res;
    const employeeList= document.querySelector('.container__body-list-ele');
    const employeeInfo=document.querySelector('.container__body-info-ele') ;
    
    let selectedEmployee=employees[0];
    let selectedEmployeeId=employees[0].id;

    //selecting a employee and removing it
    
        employeeList.addEventListener("click",(e)=>{
            if(e.target.tagName==="BUTTON")
            {
                const parentEle=e.target.parentElement.getAttribute('id');
                const elementToRemove=document.getElementById(parentEle);
                deletingEmployee(elementToRemove);
            }
            if(e.target.tagName==="H5")
            {
                const parentEle=e.target.getAttribute('id');
                selectedEmployeeId=parentEle;
                if(parentEle)
                {
                    employees.forEach((it)=>{
                        if(it.id==selectedEmployeeId)
                        {
                            selectedEmployee=it;
                        }
                    })
                }
                renderingInfoEmployee();
            }
        })
    

    //rendering a employeeList
    const renderEmployee=()=>{
       
        employees.forEach((emp,id) => {
            const employee=document.createElement('h5');
            employee.classList.add('employee__list--ele');
            employee.setAttribute('id',id);
            employee.innerHTML=`${emp.name} <button>X</button>`;
            employeeList.append(employee);

        });
      
    }
    renderEmployee();


    //rendering info of the employee
    const renderingInfoEmployee=()=>{
        const info=document.createElement('h5');
        info.classList.add('employee__info');
        info.setAttribute('id',selectedEmployeeId);
        info.innerHTML = `<h5>${selectedEmployee.name}</h5><h5>${selectedEmployee.last_name}</h5><h5>${selectedEmployee.emp_id}</h5>`
        employeeInfo.append(info);
    }

    const deletingEmployee=(elementToRemove)=>{
        elementToRemove.remove();
    }
})()