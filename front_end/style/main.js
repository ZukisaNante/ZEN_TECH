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
    'backgroundImage': 'url("../img/ian-dooley-DuBNA1QMpPA-unsplash-min.jpg")',
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
    'backgroundImage': 'url("../img/tim-umphreys-6x1zA_0H9LA-unsplash-min.jpg")',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'marginBlock': '100px',
    'textAlign': 'center',
    'color': 'white',
    'opacity': '0.2',
    'fontWeight': 'normal',
    'only screen&&<w300': {
      'fontSize': [{ 'unit': 'px', 'value': 11 }]
    }
  },
  // On smaller screens, decrease text size
  // nav
  // Style the top navigation bar
  'nav': {
    'overflow': 'hidden',
    'backgroundImage': 'url("../img/Zukisa_waveOH-min.jpg")',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
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
    'backgroundImage': 'url("../img/davidcohen-EhSxbBCjr9A-unsplash-min.jpg")',
    'backgroundPosition': 'center',
    'backgroundRepeat': 'no-repeat',
    'backgroundSize': 'cover',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'color': 'white',
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 400 }]
  },
  'mySlides': {
    'display': 'none'
  },
  'img': {
    'verticalAlign': 'middle'
  },
  // Slideshow container
  'slideshow-container': {
    'maxWidth': [{ 'unit': 'px', 'value': 1000 }],
    'position': 'relative',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  // Caption text
  'text': {
    'color': '#f2f2f2',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'only screen&&<w300': {
      'fontSize': [{ 'unit': 'px', 'value': 11 }]
    }
  },
  // Number text (1/3 etc)
  'numbertext': {
    'color': '#f2f2f2',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  // The dots/bullets/indicators
  'dot': {
    'height': [{ 'unit': 'px', 'value': 15 }],
    'width': [{ 'unit': 'px', 'value': 15 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'backgroundColor': '#bbb',
    'borderRadius': '50%',
    'display': 'inline-block',
    'transition': 'background-color 0.6s ease'
  },
  'active': {
    'backgroundColor': '#717171'
  },
  // Fading animation
  'fade': {
    'WebkitAnimationName': 'fade',
    'WebkitAnimationDuration': '1.5s',
    'animationName': 'fade',
    'animationDuration': '1.5s'
  },
  // On smaller screens, decrease text size
  // cardPhoto
  'cardPhoto': {
    'position': 'relative',
    'textAlign': 'center',
    'color': 'white'
  },
  'bottom-left': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': 16 }]
  },
  'top-left': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'left': [{ 'unit': 'px', 'value': 16 }]
  },
  'top-right': {
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8 }],
    'right': [{ 'unit': 'px', 'value': 16 }]
  },
  'bottom-right': {
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'right': [{ 'unit': 'px', 'value': 16 }]
  },
  'centered': {
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)'
  }
});
