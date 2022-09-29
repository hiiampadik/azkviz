import styles from "../styles/Home.module.scss";


export default function Hexagons (props) {

const getColor = (i) => {
     if (props.colors[i - 1] === 0){
          return 'numberWhite';
     } else if (props.colors[i - 1] === 1) {
          return 'numberOrange';
     } else if (props.colors[i - 1] === 2) {
          return 'numberBlue';
     } else if (props.colors[i - 1] === 3) {
          return 'numberBlack';
     }
}

return (
     <div className={styles.hexContainer}>
     <div className={`${styles.number} ${styles[getColor(1)]}`} onClick={() => props.handleClick(1)} style={{top: '0px', left: '240px'}} id="div_1">1</div>
     <div className={`${styles.number} ${styles[getColor(2)]}`} onClick={() => props.handleClick(2)} style={{top: '69px', left: '200px'}} id="div_2">2</div>
     <div className={`${styles.number} ${styles[getColor(3)]}`} onClick={() => props.handleClick(3)} style={{top: '69px', left: '281px'}} id="div_3">3</div>
     <div className={`${styles.number} ${styles[getColor(4)]}`} onClick={() => props.handleClick(4)} style={{top: '138px', left: '160px'}} id="div_4">4</div>
     <div className={`${styles.number} ${styles[getColor(5)]}`} onClick={() => props.handleClick(5)} style={{top: '138px', left: '241px'}} id="div_5">5</div>
     <div className={`${styles.number} ${styles[getColor(6)]}`} onClick={() => props.handleClick(6)} style={{top: '138px', left: '322px'}} id="div_6">6</div>
     <div className={`${styles.number} ${styles[getColor(7)]}`} onClick={() => props.handleClick(7)} style={{top: '207px', left: '120px'}} id="div_7">7</div>
     <div className={`${styles.number} ${styles[getColor(8)]}`} onClick={() => props.handleClick(8)} style={{top: '207px', left: '201px'}} id="div_8">8</div>
     <div className={`${styles.number} ${styles[getColor(9)]}`} onClick={() => props.handleClick(9)} style={{top: '207px', left: '282px'}} id="div_9">9</div>
     <div className={`${styles.number} ${styles[getColor(10)]}`} onClick={() => props.handleClick(10)} style={{top: '207px', left: '363px'}} id="div_10">10</div>
     <div className={`${styles.number} ${styles[getColor(11)]}`} onClick={() => props.handleClick(11)} style={{top: '276px', left: '80px'}} id="div_11">11</div>
     <div className={`${styles.number} ${styles[getColor(12)]}`} onClick={() => props.handleClick(12)} style={{top: '276px', left: '161px'}} id="div_12">12</div>
     <div className={`${styles.number} ${styles[getColor(13)]}`} onClick={() => props.handleClick(13)} style={{top: '276px', left: '242px'}} id="div_13">13</div>
     <div className={`${styles.number} ${styles[getColor(14)]}`} onClick={() => props.handleClick(14)} style={{top: '276px', left: '323px'}} id="div_14">14</div>
     <div className={`${styles.number} ${styles[getColor(15)]}`} onClick={() => props.handleClick(15)} style={{top: '276px', left: '404px'}} id="div_15">15</div>
     <div className={`${styles.number} ${styles[getColor(16)]}`} onClick={() => props.handleClick(16)} style={{top: '345px', left: '40px'}} id="div_16">16</div>
     <div className={`${styles.number} ${styles[getColor(17)]}`} onClick={() => props.handleClick(17)} style={{top: '345px', left: '121px'}} id="div_17">17</div>
     <div className={`${styles.number} ${styles[getColor(18)]}`} onClick={() => props.handleClick(18)} style={{top: '345px', left: '202px'}} id="div_18">18</div>
     <div className={`${styles.number} ${styles[getColor(19)]}`} onClick={() => props.handleClick(19)} style={{top: '345px', left: '283px'}} id="div_19">19</div>
     <div className={`${styles.number} ${styles[getColor(20)]}`} onClick={() => props.handleClick(20)} style={{top: '345px', left: '364px'}} id="div_20">20</div>
     <div className={`${styles.number} ${styles[getColor(21)]}`} onClick={() => props.handleClick(21)} style={{top: '345px', left: '445px'}} id="div_21">21</div>
     <div className={`${styles.number} ${styles[getColor(22)]}`} onClick={() => props.handleClick(22)} style={{top: '414px', left: '0px'}} id="div_22">22</div>
     <div className={`${styles.number} ${styles[getColor(23)]}`} onClick={() => props.handleClick(23)} style={{top: '414px', left: '81px'}} id="div_23">23</div>
     <div className={`${styles.number} ${styles[getColor(24)]}`} onClick={() => props.handleClick(24)} style={{top: '414px', left: '162px'}} id="div_24">24</div>
     <div className={`${styles.number} ${styles[getColor(25)]}`} onClick={() => props.handleClick(25)} style={{top: '414px', left: '243px'}} id="div_25">25</div>
     <div className={`${styles.number} ${styles[getColor(26)]}`} onClick={() => props.handleClick(26)} style={{top: '414px', left: '324px'}} id="div_26">26</div>
     <div className={`${styles.number} ${styles[getColor(27)]}`} onClick={() => props.handleClick(27)} style={{top: '414px', left: '405px'}} id="div_27">27</div>
     <div className={`${styles.number} ${styles[getColor(28)]}`} onClick={() => props.handleClick(28)} style={{top: '414px', left: '486px'}} id="div_28">28</div>
 </div>
 )
}