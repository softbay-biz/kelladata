const display_articles_request_list = (response)=>{
  let table_list = document.getElementById("admin_members_list");
  table_list.innerHTML = `<thead>
    <tr>
      <th><abbr title="Title">Article (title)</abbr></th>
      <th><abbr title="User">Who want to read</abbr></th>
      <th><abbr title="Email">Email</abbr></th>
      <th><abbr title="Action">Action</abbr></th>
    </tr>
  </thead>
  <tbody>
  `;
  if(response.error === false){console.log(response);
    let long = response.message.articlesRequestToRead.length;
    for(let i=0;i<long;i++){
      if(parseInt(response.message.articlesRequestToRead[i].statut) === 0){
              let members_temp = `<tr class="member_elt_list">
                                    <td><a></a>
                                    </td>
                                    <td><a></a>
                                    </td>
                                    <td><a></a>
                                    </td>
                                    <td>
                                        <a id="admin_action_article_request" data-statut=${response.message.articlesRequestToRead[i].statut} data-id=${response.message.articlesRequestToRead[i].id_articles_request_allow} class="button is-link">Accept</a>
                                    </td>
                                  </tr>`;
              requestAnimationFrame(()=>{
                table_list.innerHTML += members_temp;
              });
            }else{
              let members_temp = `<tr class="member_elt_list">
                                    <td><a></a>
                                    </td>
                                    <td><a></a>
                                    </td>
                                    <td><a></a>
                                    </td>
                                    <td>
                                        <a id="admin_action_article_request" data-statut=${response.message.articlesRequestToRead[i].statut} data-id=${response.message.articlesRequestToRead[i].id_articles_request_allow} class="button is-danger">Block</a>
                                    </td>
                                  </tr>`;
              requestAnimationFrame(()=>{
                table_list.innerHTML += members_temp;
              });
            }
            requestAnimationFrame(()=>{
              table_list.innerHTML += `</tbody>`;
            });
    }

  }else{
    //console.log(response.message);
  }

}
export {display_articles_request_list};
