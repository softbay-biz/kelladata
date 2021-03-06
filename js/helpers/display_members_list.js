const display_members_list = (response)=>{
  let table_list = document.getElementById("admin_members_list");
  table_list.innerHTML = `<thead>
    <tr>
      <th><abbr title="User">First name</abbr></th>
      <th><abbr title="User">Last name</abbr></th>
      <th><abbr title="Role">Role</abbr></th>
      <th><abbr title="Email">Email</abbr></th>
      <th><abbr title="Action">Action</abbr></th>
    </tr>
  </thead>
  <tbody>
  `;
  if(response.error === false){
    let total_actif_user = 0;
    let total_actif_anthropologue = 0;
    let total_actif_photograph = 0;
    for(let i=0;i<response.users.length;i++){
      if(parseInt(response.users[i].activation) === 0){
              let members_temp = `<tr class="member_elt_list">
                                    <td><a>${response.users[i].first_name}</a>
                                    </td>
                                    <td><a>${response.users[i].last_name}</a>
                                    </td>
                                    <td><a>${response.users[i].account_type}</a>
                                    </td>
                                    <td>${response.users[i].email}</td>
                                    <td>
                                        <a id="admin_action_member" data-activation=${response.users[i].activation} data-email=${response.users[i].email} data-id=${response.users[i].id} class="button is-link">Accept</a>
                                    </td>
                                  </tr>`;
              requestAnimationFrame(()=>{
                table_list.innerHTML += members_temp;
              });
            }else{
              total_actif_user ++;
              if(response.users[i].account_type === "Photographe"){
                total_actif_photograph ++;
              }else if(response.users[i].account_type === "Anthropologue"){
                total_actif_anthropologue++;
              }
              let members_temp = `<tr class="member_elt_list">
                                    <td><a>${response.users[i].first_name}</a>
                                    </td>
                                    <td><a>${response.users[i].last_name}</a>
                                    </td>
                                    <td><a>${response.users[i].account_type}</a>
                                    </td>
                                    <td>${response.users[i].email}</td>
                                    <td>
                                        <a id="admin_action_member" data-id=${response.users[i].id} class="button is-danger">Block</a>
                                    </td>
                                  </tr>`;
              requestAnimationFrame(()=>{
                table_list.innerHTML += members_temp;
                table_list.innerHTML += `</tbody>`;
              });
            }
    }
              requestAnimationFrame(()=>{
                document.getElementById("total_actif_user").innerHTML = total_actif_user;
                document.getElementById("total_actif_anthropologue").innerHTML = total_actif_anthropologue;
                document.getElementById("total_actif_photograph").innerHTML = total_actif_photograph;
              });
  }else{
    //console.log(response.message);
  }

}
export {display_members_list};
