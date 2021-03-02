import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { ApplicationState, AppDispatch, InfoProps, PageTypes } from '../../store/types'

import hrFirst from '../../images/hrFirst.svg'

import { themeStyles } from '../../styles'

import { Local } from '../../config'
import { About, Help, Contact } from '../../config/strings'

import { setActivePage } from '../../store/app/appData/actions'

interface StaticInfoProps {
  page: PageTypes
}

interface DispatchProps {
  setActivePage: (page: PageTypes) => void
}

type Props = StaticInfoProps & DispatchProps

const appInfo = (props: Props) => {

    const [pageData, setPageData] = useState<InfoProps>({title: About.heading,
    data: About.info})

    const classes = themeStyles()

    useEffect(() => {

      switch (props.page) {
        case PageTypes.ABOUT:

          setPageData({ title: About.heading, data: About.info })
          props.setActivePage(PageTypes.ABOUT)
          break

        case PageTypes.HELP:

          setPageData({ title: Help.heading, data: Help.info })
          props.setActivePage(PageTypes.HELP)
          break

        case PageTypes.CONTACT:

          setPageData({ title: Contact.heading, data: Contact.info })
          props.setActivePage(PageTypes.CONTACT)
          break

        default:

          props.setActivePage(PageTypes.SIGNIN)
      }

    }, [props.page])

    return (
      <Grid container alignItems="flex-start">
        <Grid item container justify="flex-start" xs={12}>
          <Typography variant="h2">
            {pageData.title}
          </Typography>
        </Grid>
        <Grid item container xs={12} alignItems="flex-start">
          <img src={hrFirst} className={classes.hr}/>
        </Grid>

        { pageData.data.map( (data: string, i: number ) => {

          return (

            <React.Fragment key={i}>

              <Grid item container className={classes.rightContent} xs={12}>
                <Typography variant="body1">
                  {data}
                </Typography>
              </Grid>
            </React.Fragment>
          )

        })}
      </Grid>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
 return {
   setActivePage: (page: PageTypes) => dispatch(setActivePage(page))
 }
}

export const Info = connect<DispatchProps, {}, {}, ApplicationState>(
  null,
  mapDispatchToProps
)(appInfo)
