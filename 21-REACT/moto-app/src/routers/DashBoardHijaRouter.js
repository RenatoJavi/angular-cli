import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashBoardHijaRouter = () => {
    return ( //este no va a tener el Router PROPIAMNETE, LO DE MAS SI
        <>
            
            <Navbar/>

            <div>
                <Switch>

                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/heroe/:heroeId" component={HeroeScreen}></Route>
                    <Route exact path="/dc" component={DcScreen}></Route>
                    <Redirect to="/marvel"></Redirect>
               
                </Switch>
            </div>
        </>
    )
}
