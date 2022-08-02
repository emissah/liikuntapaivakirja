import styles from "./stats.module.scss";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer, Label, CartesianGrid, Tooltip, Pie, PieChart, LabelList, Legend, Cell } from "recharts";
import randomColor from "randomcolor";
// Olisiko mahdollista toteuttaa niin, että laskettaisiin tunnit ja minuutit yhteen minuutteina, sitten ilmaistaisiin tunteina?

function Stats(props) {

    const linedata = props.data.map(item => ({date: new Date(item.date).getTime(), kilometres: item.kilometres }));
    
    const reducer = (groupedData, item) => {
        const index = groupedData.findIndex ( arrayItem => arrayItem.type === item.type) ;
        if (index >= 0) {
            groupedData[index].kilometres = groupedData[index].kilometres = item.kilometres;
        } else {
            groupedData.push({type: item.type, kilometres: item.kilometres});
        }
        return groupedData;

    }

    const piedata = props.data.reduce(reducer, []);
    const piecolors = randomColor({count: piedata.length, seed: "liikuntapaivakirja"});

    return(
    <div className={styles.stats}>
        <h2>Stats</h2>
        <h3>Liikkumiseen käytetyt kilometrit</h3>
        <ResponsiveContainer width={"100%"} height={360}>
        <LineChart data={linedata} margin={ {top: 20, left: 20, right: 20, bottom: 10 }} >
        <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" 
            dataKey="date" 
            domain={["dataLink", "dataMax"]} 
            scale="time"
            tickFormatter={timeStr => new Date(timeStr).toLocaleDateString("fi-FI")} 
            />
            <YAxis>
            <Label value="Kilometrit"
                    position="left" 
                    angle={-90}  
                    style={{textAnchor: "middle"}}                  
                    />
            </YAxis>
            <Line dataKey="kilometres" name="Kilometrit" />
        <Tooltip labelFormatter={value => new Date(value).toLocaleDateString("fi-FI")}/>
        </LineChart>
        </ResponsiveContainer>
        <h2>Kilometrit liikuntalajeittain</h2>

        <ResponsiveContainer width={"100%"} height={360} className={styles.legend}>
         <PieChart>

        <Pie data={piedata} dataKey="kilometres" nameKey="type">
        <LabelList dataKey="kilometres" position="inside" />
        {piecolors.map(color => <Cell fill={color} key={color} /> )}
        </Pie>    
        <Legend  /> 
        <Tooltip formatter={value => value + " km" }/>    
        </PieChart>   
            
        </ResponsiveContainer> 

    </div>
    );
}

export default Stats;