import { createContext, useState, useEffect } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }: any) => {

    const [data, setData] = useState([]);

    const [loading, setLoading] = useState(true) as any;

    useEffect(() => {
        fetchData()
        .then((response: any) => {
            setData(response)
            setLoading(false)
        })
    }, [])

    let value: any = {
        loading,
        data
    };

    return (
        <DataContext.Provider value={value} >
            {children}
        </DataContext.Provider>
    );


}

function fetchData() {
    return new Promise(resolve => {
    setTimeout(resolve, 200, data)
    })
} 

const data = [
    {
        id: 1,
        name: 'Jennifer Connelly'
    },
    {
        id: 2,
        name: 'Tom Cruise',
        children: [
          {
            id: 12,
            name: 'Top Gun: Maverick'
          },
          {
            id: 13,
            name: 'Mission: Impossible'
          }
        ]
    },
    {
        id: 3,
        name: 'Jim Carrey',
        children: [
          {
            id: 14,
            name: '1995',
            children: [
              {
                id: 15,
                name: 'Ace Ventura: When Nature Calls'
              },
              {
                id: 16,
                name: "Batman Forever",
              },
            ]
          },
          {
            id: 18,
            name: '1998',
            children: [
              {
                id: 22,
                name: 'The Truman Show'
              }
            ]
          }
        ]
    },
    {
        id: 4,
        name: 'Milly Alcock'
    },
    {
    id: 5,
    name: 'Emma Stone',
    children: [
        {
        id: 23,
        name: 'La La Land'
        },
        {
        id: 24,
        name: 'The Amazing Spider-Man'
        }
    ]
    }
]