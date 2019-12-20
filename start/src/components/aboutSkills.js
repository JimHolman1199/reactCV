import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Container from '@material-ui/core/Container';

const SkiilsItem = ({skills})=>{
    return <div className="progress-bar-linear">
                <p className="progress-bar-text"> {skills.name} </p>
                <div className="progress-cont">
                    <span className="main-color progress-bar-text">{skills.percent + '%'}</span>
                </div>
                <div className="progress-bar-skills">
                    <div className="progress-bar-line main-color-bg" data-percent={skills.percent}></div>
                </div>
            </div>
}

const aboutProgres = [
    { name:'Frontend Dev', percent: 75, skills: [ 
      { name:'HTML5, CSS3', percent: 90 },
      { name:'JavaScript', percent: 55 },
      { name:'CMS(WORDPRESS,Typo3)', percent: 35 },
      { name:'React.js', percent: 50 }
    ] },
    { name:'Technical Marketing', percent: 90, skills: [ 
      { name:'GoogleTagManager', percent: 100 },
      { name:'GoogleAnalytics', percent: 100 },
      { name:'FacebookADS', percent: 90 },
      { name:'GoogleADS', percent: 90 }
    ] },
    { name:'Carpentry', percent: 90, skills: [ 
      { name:'Building frameworks', percent: 90 },
      { name:'Building plans to meet the needs of clients', percent: 85 }
    ] }
  ]


const ExpansionPanel = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles({
    root: {
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiExpansionPanelSummary);
  
  const ExpansionPanelDetails = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiExpansionPanelDetails);
  
  export default function CustomizedExpansionPanels() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : true);
    };
  
    return (
        <React.Fragment>
          {
            aboutProgres.map((aboutProgres,i)=>{
                return <ExpansionPanel square expanded={expanded === 'panel' + i} onChange={handleChange('panel' + i)} key = {aboutProgres+i}>
                <ExpansionPanelSummary aria-controls={'panel' +i+'d-content'} id={'panel' +i+'d-header'}>
                  <div className="progress-bar-linear">
                      <p className="progress-bar-text">{aboutProgres.name}</p>
                      <div className="progress-cont">
                          <span className="main-color progress-bar-text">{aboutProgres.percent + '%'}</span>
                      </div>
                      <div className="progress-bar-skills">
                          <div className="progress-bar-line main-color-bg" data-percent={aboutProgres.percent}></div>
                      </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Container>
                      {
                        aboutProgres.skills? aboutProgres.skills.map((item, i)=>{ 
                            return <SkiilsItem skills={item} i={i} key = {i} /> 
                        }): false
                      }
                  </Container>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            })
          }
        </React.Fragment>
    );
  }
  