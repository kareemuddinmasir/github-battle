var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');



ReactDOM.render(
    <App />,document.getElementById('app')
);




















/*
var PropTypes = require('prop-types');

class User extends React.Component {
    render(){
        var friends = this.props.list.filter(function(user){
            return user.friend === true
        });
        var nonFriends = this.props.list.filter(function(user){
            return user.friend !== true
        });


        return(
            <div>
                <h1>Friends</h1>
                <ul>
                    {friends.map(function (user){
                        return <li key ={user.name}>{user.name}</li>
                    })}

                </ul>
                    <hr />
                    <h1> Non Friends</h1>
                    <ul>
                    {nonFriends.map(function(user){
                        return <li key ={user.name}>{user.name}</li>
                    })}

                    </ul>
               
            </div>
        )
    }
}

    
User.propTypes={
    list: PropTypes.array.isRequired
}
  
  ReactDOM.render(
    <User list={[
      { name: 'Tyler', friend: true },
      { name: 'Ryan', friend: true },
      { name: 'Michael', friend: false },
      { name: 'Mikenzi', friend: false },
      { name: 'Jessica', friend: true },
      { name: 'Dan', friend: false } ]}
    />,
    document.getElementById('app')
  );





























/*
class User extends React.Component{
    render(){
        return(
            <div>
                


            </div>
        )
    }
}

User.propTypes={
    img:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    username:PropTypes.string.isRequired
}

ReactDOM.render(
    <Badge
    
/>,
document.getElementById('app')
);

/*
<img src={this.props.img}
                alt ='Avatar'
                style={{width: 100, height: 100}}
                />
                <h1>Name:{this.props.name}</h1>
                <h3>Username:{this.props.username}</h3>

*/

/*
name='Tyler Mcginnis'
    username='tylermcginnis'
    img='https://avatars0.githubusercontent.com/u/2933430?s=400&v=4'

    */