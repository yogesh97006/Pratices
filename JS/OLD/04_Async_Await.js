let WeatherFunction = async () =>{
    let DelhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("10 Deg")
        },10000)
    })

    let HyderbadWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("20 Deg")
        },20000)
    })

    console.log("fetching waether.................")
    let Delhi = await DelhiWeather
    console.log("---------------------------------");
    console.log(`Fecthing Delhi Weather`)
    console.log(`The Delhi Weather is A round ${Delhi}`)
    console.log("---------------------------------");
    let Hyd = await HyderbadWeather
    console.log("Fetching Hyderabad Weather")
    console.log(`The Hyderabad Waether is a round ${Hyd}`)
    console.log("---------------------------------");
    console.log("Featching Waether is Completed")

    return [Delhi,Hyd]
}


async function small(){
    console.log("I Think Fetching Of Weather Data Is Completed")
}


console.log("This is a first Console log");
async function AllFunctions(){
    console.log("Hear i Am calling all functions")
    let a = await WeatherFunction()
    let b = await small()
}
AllFunctions()
console.log("This is a second Console log");
