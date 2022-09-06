import { useContext } from "react";

// context
import { DataContext } from "../context/DataContext";

// components
import { Button } from "./Button";

export const List = () => {

    // extract loading and data from DataContext
    const { loading, data }: any = useContext(DataContext)

    // if still loading, return loading...
    if (loading) {
        return (
            <div>
                loading...
            </div>
        );
    }

    // map through data and return data tree
    return (

        <ul key={`ul-main`}>
          {data.map((person: any) => {
            return (
                <li style={{ listStyleType: person.children ? "none" : "disc" }} key={`li-${person.id}`}>

                  <Button item={person} key={`button-${person.id}`}/>

                  {person.name}

                  {/* set child id for collapsibility */}
                  <ul id={`child-${person.name}`} key={`key-${person.id}`}>

                  {/* if data has children, return list of children */}
                  {person.children ? person.children.map((firstChild: any) => {
                
                      return (
                        
                        <li style={{ listStyleType: firstChild.children ? "none" : "circle" }} key={`li-${firstChild.id}`}>

                          <Button item={firstChild} key={`button-${firstChild.id}`}/>

                          {firstChild.name}

                          {/* set child id for collapsibility */}
                          <ul id={`child-${firstChild.name}`} key={`ul-${firstChild.id}`}>

                          {/* if data has children, return list of children */}
                          {firstChild.children ? 
                            firstChild.children.map((secondChild: any) => {
                                return (
                                    <li key={`li-${secondChild.id}`}>
                                        {secondChild.name}
                                    </li>
                                )
                            })
                          : null}

                          </ul>
                        </li>

                      );
                  })
                  : null}
                  </ul>
                </li>
            );
          })}
        </ul>
    )
}