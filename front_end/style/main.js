import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // --##################################################### 
#   ZEN_TECH solutions                                  #
#   Programmer: Zukisa NANTE                            #
#   Qualifications: Bachelor Electrical  Engineering    #
#   Specialisation: Computer Operating Systems          #
######################################################-
  // declaring variables
  // body
  '*': {
    'boxSizing': 'border-box'
  },
  'body': {
    'font': [{ 'unit': '%V', 'value': 1 }, { 'unit': 'string', 'value': '"Abel",' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': 'lightGrey'
  },
  'html': {
    'font': [{ 'unit': '%V', 'value': 1 }, { 'unit': 'string', 'value': '"Abel",' }, { 'unit': 'string', 'value': 'sans-serif' }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'backgroundColor': 'lightGrey'
  },
  '#canvas': {
    'backgroundColor': '#008080'
  },
  'mainContent': {
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }],
    'maxWidth': [{ 'unit': 'px', 'value': 500 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'backgroundColor': 'aqua'
  },
  // parallax
  'parallax': {
    // The image used
    'backgroundImage': 'url("../img/ian-dooley-DuBNA1QMpPA-unsplash.jpg")',
    // Full height
    'height': [{ 'unit': '%V', 'value': 1 }],
    // Create the parallax scrolling effect
    'backgroundAttachment': 'fixed',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'only screen&&max-device-width 1366p': {
      'backgroundAttachment': 'scroll'
    }
  },
  // Turn off parallax scrolling for tablets and phones. Increase the pixels if needed
  // For mobile phones:
  '[class*="col-"]': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  // Extra small devices (phones, 600px and down)
  // Small devices (portrait tablets and large phones, 600px and up)
  // Medium devices (landscape tablets, 768px and up)
  // Large devices (laptops/desktops, 992px and up)
  // Extra large devices (large laptops and desktops, 1200px and up)
  // header
  'header': {
    'backgroundColor': '#008080',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'marginBlock': '100px',
    'textAlign': 'center'
  },
  // nav
  // Style the top navigation bar
  'nav': {
    'overflow': 'hidden',
    'backgroundColor': '#333',
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  // Style the navL.navLinks links
  'navLinks a': {
    'float': 'left',
    'display': 'block',
    'color': '#f2f2f2',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 14 }, { 'unit': 'px', 'value': 16 }],
    'textDecoration': 'none'
  },
  // Change color on hover
  'navLinks a:hover': {
    'backgroundColor': '#ddd',
    'color': 'black'
  },
  // navbar responsive
  // Create three unequal columns that floats next to each other
  'column': {
    'float': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  // Left and right column
  'columnside': {
    'width': [{ 'unit': '%H', 'value': 0.25 }],
    'screen&&<w600': {
      'width': [{ 'unit': '%H', 'value': 1 }]
    }
  },
  // Middle column
  'columnmiddle': {
    'width': [{ 'unit': '%H', 'value': 0.5 }]
  },
  // Clear floats after the columns
  'row:after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  // Responsive layout - makes the three columns stack on top of each other instead of next to each other
  // cardPhoto
  'img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // footer
  'footer': {
    'backgroundColor': '#333',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': 'white',
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 400 }]
  }
});
