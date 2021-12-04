import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Typography, List, ListItem,
  withStyles, Grid, SwipeableDrawer, IconButton, Avatar, Button, Chip, Badge, Divider
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { SaveAltSharp, SaveSharp } from '@material-ui/icons';

const styleSheet = {
  list : {
    width : 200,
  },
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },

  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },

   listFlex : {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  
    abRoot: {
      backgroundColor: "#fff"
    },
    abStatic: {
      border: "solid blue 2px"
    },
  

}

class ResAppBar extends Component{
  constructor(props){
    super(props);
    this.state = {drawerActivate:false, drawer:false};
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount(){
    if(window.innerWidth <= 600){
      this.setState({drawerActivate:true});
    }

    window.addEventListener('resize',()=>{
      if(window.innerWidth <= 600){
        this.setState({drawerActivate:true});
      }
      else{
        this.setState({drawerActivate:false})
      }
    });
  }

  //Small Screens
  createDrawer(){
    return (
      <div>
        <AppBar style={{ background: '#fff' }}>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
            <IconButton 
            color="inherit"
            onClick={()=>{this.setState({drawer:true})}}
            edge="start"
          >
           {/* <img src = "/public/images/icon-black.jpeg" height={25} width={25}/> */}
          
           <img src='/icon-black.jpeg' />

          </IconButton>
          {/* <SearchBar placeholder="City,ZIP,School,Adresse"/> */}
          <Chip icon={<SaveAltSharp />} label="With Icon" variant="outlined"/>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={this.state.drawer}
         onClose={()=>{this.setState({drawer:false})}}
         onOpen={()=>{this.setState({drawer:true})}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{this.setState({drawer:false})}}
             onKeyDown={()=>{this.setState({drawer:false})}}>

           
             <List display="none" className = {this.props.classes.list}>
             <ListItem key = {1} button> Sign In / Join </ListItem>
             </List>
             <Divider/>
             <List className = {this.props.classes.list}>
             <ListItem key = {0} button > Home </ListItem>
               <ListItem key = {1} button > Buy </ListItem>
               <ListItem key = {2} button > Sell </ListItem>
               <ListItem key = {3} button > Rent </ListItem>
               <ListItem key = {4} button > Mortgage </ListItem>
               <ListItem key = {5} button > Agent </ListItem>
               <ListItem key = {3} button > Saved Homes </ListItem>
              <ListItem key = {4} button > Saved Seraches </ListItem>
              <ListItem key = {5} button > (509) xx-xx-xx-xx </ListItem>

             </List>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  destroyDrawer(){
    const {classes} = this.props
    return (
     
        <AppBar 
        style={{ background: '#fff' }} >
        <Toolbar>
          <Grid container direction = "row" justify = "space-between" alignItems="center">
            <Avatar
            
              className = {this.props.classes.sideBarIcon}
              img = "../../public/images/icon-black.jpeg"
              onClick={()=>{this.setState({drawer:true})}}
              
              />
              <Chip icon={<SaveAltSharp />} label="With Icon" variant="outlined"  />
             
              {/* <SearchBar placeholder="City,ZIP,School,Adresse"/> */}

              <List className = {this.props.classes.listFlex} >
               <ListItem key = {1} button > Buy </ListItem>
               <ListItem key = {2} button > Sell </ListItem>
               <ListItem key = {3} button > Rent </ListItem>
               <ListItem key = {4} button > Mortgage </ListItem>
               <ListItem key = {5} button > Agent </ListItem>
               <ListItem key = {6} button > Sign In / Join </ListItem>
             </List>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  render(){
    return(
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);
