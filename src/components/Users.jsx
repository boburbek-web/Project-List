export default function Users(props) {

      const { data = [] } = props.data;
  
      console.log(data);
  
      return (
          <>
  
              <div className="container p-3">
  
                  {data.map((item) => (
  
                      <div className="boxs">
  
                          <img className="boxs-img-top" src={item.avatar} alt="Card image cap" />
  
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item">{item.first_name}</li>
                              <li className="list-group-item">{item.last_name}</li>
                              <li className="list-group-item">{item.email}</li>
                          </ul>
  
                      </div>
                  ))}
              </div></>
  
      )
  }