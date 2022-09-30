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
     <div className={`${styles.number} ${styles[getColor(1)]}`} onClick={() => props.handleClick(1, 0, 240)} style={{top: '0px', left: '240px'}} id="div_1">A</div>
     <div className={`${styles.number} ${styles[getColor(2)]}`} onClick={() => props.handleClick(2, 69, 200)} style={{top: '69px', left: '200px'}} id="div_2">B</div>
     <div className={`${styles.number} ${styles[getColor(3)]}`} onClick={() => props.handleClick(3, 69, 281)} style={{top: '69px', left: '281px'}} id="div_3">C</div>
     <div className={`${styles.number} ${styles[getColor(4)]}`} onClick={() => props.handleClick(4, 138, 160)} style={{top: '138px', left: '160px'}} id="div_4">D</div>
     <div className={`${styles.number} ${styles[getColor(5)]}`} onClick={() => props.handleClick(5, 138, 241)} style={{top: '138px', left: '241px'}} id="div_5">E</div>
     <div className={`${styles.number} ${styles[getColor(6)]}`} onClick={() => props.handleClick(6, 138, 322)} style={{top: '138px', left: '322px'}} id="div_6">F</div>
     <div className={`${styles.number} ${styles[getColor(7)]}`} onClick={() => props.handleClick(7, 207, 120)} style={{top: '207px', left: '120px'}} id="div_7">G</div>
     <div className={`${styles.number} ${styles[getColor(8)]}`} onClick={() => props.handleClick(8, 207, 201)} style={{top: '207px', left: '201px'}} id="div_8">H</div>
     <div className={`${styles.number} ${styles[getColor(9)]}`} onClick={() => props.handleClick(9, 207, 282)} style={{top: '207px', left: '282px'}} id="div_9">CH</div>
     <div className={`${styles.number} ${styles[getColor(10)]}`} onClick={() => props.handleClick(10, 207, 363)} style={{top: '207px', left: '363px'}} id="div_10">I</div>
     <div className={`${styles.number} ${styles[getColor(11)]}`} onClick={() => props.handleClick(11, 276, 80)} style={{top: '276px', left: '80px'}} id="div_11">J</div>
     <div className={`${styles.number} ${styles[getColor(12)]}`} onClick={() => props.handleClick(12, 276, 161)} style={{top: '276px', left: '161px'}} id="div_12">K</div>
     <div className={`${styles.number} ${styles[getColor(13)]}`} onClick={() => props.handleClick(13, 276, 242)} style={{top: '276px', left: '242px'}} id="div_13">L</div>
     <div className={`${styles.number} ${styles[getColor(14)]}`} onClick={() => props.handleClick(14,276, 323)} style={{top: '276px', left: '323px'}} id="div_14">M</div>
     <div className={`${styles.number} ${styles[getColor(15)]}`} onClick={() => props.handleClick(15, 276, 404)} style={{top: '276px', left: '404px'}} id="div_15">N</div>
     <div className={`${styles.number} ${styles[getColor(16)]}`} onClick={() => props.handleClick(16,345, 40)} style={{top: '345px', left: '40px'}} id="div_16">O</div>
     <div className={`${styles.number} ${styles[getColor(17)]}`} onClick={() => props.handleClick(17,345, 121)} style={{top: '345px', left: '121px'}} id="div_17">P</div>
     <div className={`${styles.number} ${styles[getColor(18)]}`} onClick={() => props.handleClick(18,345, 202)} style={{top: '345px', left: '202px'}} id="div_18">Q</div>
     <div className={`${styles.number} ${styles[getColor(19)]}`} onClick={() => props.handleClick(19,345, 283)} style={{top: '345px', left: '283px'}} id="div_19">R</div>
     <div className={`${styles.number} ${styles[getColor(20)]}`} onClick={() => props.handleClick(20,345, 364)} style={{top: '345px', left: '364px'}} id="div_20">S</div>
     <div className={`${styles.number} ${styles[getColor(21)]}`} onClick={() => props.handleClick(21,345, 445)} style={{top: '345px', left: '445px'}} id="div_21">Š</div>
     <div className={`${styles.number} ${styles[getColor(22)]}`} onClick={() => props.handleClick(22,414, 0)} style={{top: '414px', left: '0px'}} id="div_22">T</div>
     <div className={`${styles.number} ${styles[getColor(23)]}`} onClick={() => props.handleClick(23,414, 81)} style={{top: '414px', left: '81px'}} id="div_23">U</div>
     <div className={`${styles.number} ${styles[getColor(24)]}`} onClick={() => props.handleClick(24,414, 162)} style={{top: '414px', left: '162px'}} id="div_24">V</div>
     <div className={`${styles.number} ${styles[getColor(25)]}`} onClick={() => props.handleClick(25,414, 243)} style={{top: '414px', left: '243px'}} id="div_25">W</div>
     <div className={`${styles.number} ${styles[getColor(26)]}`} onClick={() => props.handleClick(26,414, 324)} style={{top: '414px', left: '324px'}} id="div_26">X</div>
     <div className={`${styles.number} ${styles[getColor(27)]}`} onClick={() => props.handleClick(27,414, 405)} style={{top: '414px', left: '405px'}} id="div_27">Y</div>
     <div className={`${styles.number} ${styles[getColor(28)]}`} onClick={() => props.handleClick(28,414, 486)} style={{top: '414px', left: '486px'}} id="div_28">Z</div>
 </div>
 )
}