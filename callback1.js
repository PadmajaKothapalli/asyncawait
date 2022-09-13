let employees = [{ id: 101, name: "Lalitha", sal: 45000, email:"lalith@gmail.com" },
{ id: 102, name: "Mala", sal: 40000 , email:"mala34@gmail.com"},
{id:103,name:"Pratha", sal:55000 , email:"pratha126@gmail.com"}]

let createEmployee = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 4000);
}
let getEmployees = () => {
    setTimeout(() => {
        let rows = "";
        employees.forEach((employee) => {
            rows = rows + `<tr>
                                <td> ${ employee.id}</td>
                                <td> ${ employee.name}</td>
                                <td> ${ employee.sal}</td>
                                <td> ${ employee.email}</td>
                            </tr>`
        })
        document.getElementById('tbody_Data').innerHTML = rows
    }, 1000)
}
createEmployee({ id: 104, name: "Tara", sal: 65000 , email:"tara789@gmail.com"}, getEmployees)
