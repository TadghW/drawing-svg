const preferredFrequencies = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 45, 46, 47, 48, 49, 50, 50, 51, 52, 53, 54, 55, 56, 56, 57, 58, 59, 60, 61, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 86, 87, 88, 89, 91, 92, 93, 95, 96, 97, 99, 100, 102, 103, 105, 106, 108, 
    109, 111, 112, 114, 116, 117, 119, 121, 123, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 157, 159, 161, 164, 166, 168, 171, 173, 176, 178, 181, 183, 186, 189, 192, 194, 197, 200, 202, 206, 208, 212, 214, 218, 222, 224, 228, 230, 234, 238, 242, 244, 248, 252, 256, 260, 262, 266, 270, 274, 278, 282, 286, 290, 294, 300, 304, 308, 312, 316, 322, 326, 330, 336, 340, 346, 350, 356, 360, 366, 372, 376, 382, 388, 394, 400, 404, 410, 416, 422, 428,
    436, 442, 448, 454, 460, 468, 474, 482, 488, 496, 502, 510, 518, 524, 532, 540, 548, 556, 564, 572, 580, 588, 598, 606, 614, 624, 632, 642, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 752, 762, 774, 784, 796, 808, 820, 832, 844, 856, 868, 880, 894, 906, 920, 932, 946, 960, 974, 988, 1002, 1016, 1032, 1046, 1062, 1078, 1092, 1108, 1124, 1140, 1158, 1174, 1192, 1208, 1226, 1244, 1262, 1280, 1298, 1318, 1336, 1356, 1376, 1396, 1416, 1436, 1458, 1478, 1500, 1522, 1544, 1566, 
    1588, 1612, 1636, 1658, 1682, 1708, 1732, 1758, 1782, 1808, 1834, 1862, 1888, 1916, 1944, 1972, 2000, 2020, 2060, 2080, 2120, 2140, 2180, 2220, 2240, 2280, 2300, 2340, 2380, 2420, 2440, 2480, 2520, 2560, 2600, 2620, 2660, 2700, 2740, 2780, 2820, 2860, 2900, 2940, 3000, 3040, 3080, 3120, 3160, 3220, 3260, 3300, 3360, 3400, 3460, 3500, 3560, 3600, 3660, 3720, 3760, 3820, 3880, 3940, 4000, 4040, 4100, 4160, 4220, 4280, 4360, 4420, 4480, 4540, 4600, 4680, 4740, 4820, 4880, 4960, 
    5020, 5100, 5180, 5240, 5320, 5400, 5480, 5560, 5640, 5720, 5800, 5880, 5980, 6060, 6140, 6240, 6320, 6420, 6500, 6600, 6700, 6800, 6900, 7000, 7100, 7200, 7300, 7400, 7520, 7620, 7740, 7840, 7960, 8080, 8200, 8320, 8440, 8560, 8680, 8800, 8940, 9060, 9200, 9320, 9460, 9600, 9740, 9880, 10020, 10160, 10320, 10460, 10620, 10780, 10920, 11080, 11240, 11400, 11580, 11740, 11920, 12080, 12260, 12440, 12620, 12800, 12980, 13180, 13360, 13560, 13760, 13960, 14160, 14360, 14580, 14780,
    15000, 15220, 15440, 15660, 15880, 16120, 16360, 16580, 16820, 17080, 17320, 17580, 17820, 18080, 18340, 18620, 18880, 19160, 19440, 19720];

const diffuse = [-4.84, -4.86, -4.88, -4.89, -4.9, -4.9, -4.87, -4.83, -4.87, -4.9, -4.89, -4.89, -4.92, -4.98, -5.03, -5.06, -5.04, -5.02, -4.97, -4.94, -4.92, -4.92, -4.91, -4.9, -4.89, -4.89, -4.88, -4.87, -4.88, -4.91, -4.95, -4.95, -5.01, -5.04, -5.06, -5.04, -5, -4.93, -4.93, -4.85, -4.79, -4.76, -4.76, -4.78, -4.78, -4.8, -4.84, -4.87, -4.88, -4.86, -4.84, -4.82, -4.79, -4.77, -4.75, -4.74, -4.73, -4.73, -4.73, -4.72, -4.72, -4.72, -4.71, -4.7, -4.69, -4.69, -4.7, -4.73, -4.76,
    -4.8, -4.83, -4.87, -4.87, -4.86, -4.81, -4.76, -4.71, -4.59, -4.53, -4.43, -4.41, -4.34, -4.3, -4.22, -4.19, -4.12, -4.09, -4.03, -4, -3.99, -3.96, -3.93, -3.91, -3.9, -3.87, -3.85, -3.84, -3.83, -3.83, -3.83, -3.83, -3.83, -3.83, -3.83, -3.84, -3.84, -3.83, -3.81, -3.79, -3.73, -3.7, -3.66, -3.6, -3.57, -3.55, -3.57, -3.58, -3.63, -3.65, -3.69, -3.71, -3.76, -3.79, -3.83, -3.85, -3.89, -3.92, -3.93, -3.91, -3.89, -3.82, -3.79, -3.72, -3.66, -3.62, -3.53, -3.5, -3.42, -3.34, -3.27,
    -3.23, -3.15, -3.13, -3.15, -3.18, -3.21, -3.27, -3.3, -3.35, -3.39, -3.42, -3.44, -3.44, -3.42, -3.38, -3.36, -3.33, -3.32, -3.31, -3.29, -3.27, -3.27, -3.24, -3.18, -3.06, -2.94, -2.75, -2.61, -2.39, -2.24, -2.18, -2.16, -2.21, -2.32, -2.43, -2.5, -2.6, -2.7, -2.82, -2.9, -2.96, -2.94, -2.86, -2.76, -2.64, -2.52, -2.41, -2.28, -2.21, -2.11, -2.04, -1.97, -1.92, -1.92, -1.94, -2, -2.08, -2.14, -2.18, -2.22, -2.22, -2.17, -2.03, -1.88, -1.71, -1.45, -1.24, -0.99, -0.8, -0.62, -0.52,
    -0.5, -0.53, -0.58, -0.61, -0.64, -0.67, -0.69, -0.67, -0.64, -0.58, -0.52, -0.44, -0.37, -0.3, -0.24, -0.17, -0.1, -0.01, 0.11, 0.26, 0.39, 0.46, 0.47, 0.41, 0.27, 0.13, 0.06, 0.07, 0.14, 0.29, 0.42, 0.54, 0.59, 0.63, 0.7, 0.82, 1, 1.23, 1.4, 1.5, 1.53, 1.56, 1.64, 1.86, 2.15, 2.41, 2.55, 2.5, 2.27, 1.97, 1.8, 1.77, 1.93, 2.23, 2.57, 2.91, 3.23, 3.57, 3.86, 4.12, 4.34, 4.47, 4.56, 4.64, 4.77, 4.91, 5.1, 5.29, 5.5, 5.72, 5.96, 6.21, 6.48, 6.71, 6.92, 7.08, 7.17, 7.35, 7.47, 7.84, 8.09,
    8.56, 8.89, 8.98, 9.02, 9.01, 9.07, 9.24, 9.52, 9.7, 10.07, 10.43, 10.8, 11.13, 11.24, 11.35, 11.33, 11.24, 11.19, 11.25, 11.41, 11.61, 11.74, 11.71, 11.51, 11.19, 10.85, 10.55, 10.29, 10.21, 10.23, 10.32, 10.41, 10.57, 10.65, 10.64, 10.55, 10.34, 10.12, 10.02, 9.96, 9.96, 9.96, 9.93, 9.89, 9.83, 9.74, 9.62, 9.45, 9.14, 8.9, 8.72, 8.64, 8.62, 8.62, 8.59, 8.48, 8.38, 8.23, 8.11, 7.91, 7.71, 7.57, 7.44, 7.38, 7.35, 7.3, 7.21, 7.08, 6.92, 6.77, 6.59, 6.46, 6.32, 6.15, 6.01, 5.84, 5.7, 5.54,
    5.41, 5.32, 5.26, 5.21, 5.14, 5.05, 4.92, 4.81, 4.69, 4.63, 4.53, 4.62, 5.02, 5.69, 6.64, 7.69, 8.66, 9.52, 10.32, 10.96, 11.32, 11.27, 10.89, 10.3, 9.26, 7.57, 5.57, 3.83, 2.79, 2.79, 3.87, 4.97, 5.57, 5.46, 4.99, 4.51, 4.5, 5.09, 6.05, 6.73, 6.94, 6.6, 5.86, 5.03, 4.39, 3.96, 3.68, 3.5, 3.3, 3.02, 2.81, 2.74, 2.87, 3.19, 3.73, 4.26, 4.83, 5.4, 5.93, 6.29, 6.42, 6.22, 5.77, 5.19, 4.62, 4.21, 3.97, 3.87, 3.89, 3.98, 4.15, 4.34, 4.41, 4.26, 3.87, 3.3];


function drawGraph(array){

    let svg = document.getElementById("graph"); //SVG that draws the graph
    let contHeight = svg.getBoundingClientRect().height;  //Dynamic height thereof
    let contWidth = svg.getBoundingClientRect().width;  //Dynamic width thereof

    svg.innerHTML = ''

    //What we need to do now is calculate the path that an SVG needs to take in order to make our axes and grid. 
    //In order to figure that out, we need basic information about what we need the graph to be

    let maxMag = 20
    let minMag = -10
    let minFreq = 20
    let maxFreq = 20000

    //Now we need to know what physical space our graph will inhabit

    let padding = {top: 40, bottom: 40, left: 120, right: 120} //Padding we add in to keep the graph from the edges of its container
    let graphingArea = {width: contWidth - (padding.left + padding.right), height: contHeight - (padding.top + padding.bottom)} //Calculate size of graph (full size - padding)

    //Now we need to know how many pixels of movement are should represent each increment in frequency and magnitude
    //We can figure that out by dividing the canvas axes by the range of frequency and magnitude data in the dataset

    let magRange = maxMag + (minMag * -1)
    let freqRange = maxFreq - minFreq

    //Now we can now draw a squiggle by multiplying each value pair of freq / mag by PixelPerHz or PixelPerDB to find its co-ordinates in our graph space
    //Before we do that, however, we want to draw our axes, grid, and branding beneath and around the graphing area

    let svgNS = 'http://www.w3.org/2000/svg'

    let yAxis = document.createElementNS(svgNS, 'path')
    yAxis.setAttribute('stroke', '#000');
    yAxis.setAttribute('stroke-width', 0.1);
    yAxis.setAttribute('d', 'M ' + padding.left + ' ' + padding.top + ' v ' + graphingArea.height + ' Z');
    svg.appendChild(yAxis)

    let xAxis = document.createElementNS(svgNS, 'path')
    xAxis.setAttribute('stroke', '#000');
    xAxis.setAttribute('stroke-width', 0.1);
    xAxis.setAttribute('d', 'M ' + padding.left + ' ' + (padding.top + graphingArea.height) + ' h ' + graphingArea.width + ' Z')
    svg.appendChild(xAxis)

    //With our axes drawn we can now draw ticks and a grid. First let's calculate the path we should take to get our desired density of grid lines
    //Calculating the quantity and position of y-axis ticklines is simple. We're using a 2dB fixed increment on y and dB is already a log scale so we
    //can map it linearly

    //yGrid
    let yTickPer = 1;
    let yTickCount = magRange / yTickPer
    let yTickEvery = graphingArea.height / yTickCount
    let yGridPath = 'M ' + padding.left + ' ' + padding.top + ' h ' + graphingArea.width + ' m ' + (graphingArea.width * -1) + ' ' + yTickEvery
    
    for(let i = 0; i < yTickCount; i++){
        yGridPath += ' h ' + graphingArea.width + ' m ' + (graphingArea.width * -1) + ' ' + yTickEvery
    }

    //yTick
    let yTickPath = 'M ' + padding.left + ' ' + (padding.top + yTickEvery)
    let yTickWidth = 10

    for(let i = 0; i < yTickCount; i++){
        yTickPath += ' h ' + (yTickWidth * -1) + ' m ' + yTickWidth + ' ' + yTickEvery
    }

    //Calculating the quantity and positions of the x-axis ticklines is a little more complex. For each decade of our frequency spectrum we want 10 ticks
    //and the position of each tick should be mapped logarithmically onto our x-axis as Hz is a linear scale

    //xGrid
    let xTicks = [30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 20000]
    let xGridPath = ''

    for(let tick of xTicks){
        let extentLog = Math.log10(20000) - Math.log10(20)
        let tickLog = Math.log10(tick) - Math.log10(20)
        let tickCoefficient = tickLog / extentLog 
        let realSpaceTickPos = graphingArea.width * tickCoefficient
        xGridPath += ' M ' + (padding.left + realSpaceTickPos) + ' ' + (padding.top+graphingArea.height) + ' v ' + (graphingArea.height * -1);
    }

    //xTick
    let xTickPath = ''
    let xTickHeight = 10

    for(let tick of xTicks){
        let wPerHzLin = graphingArea.width / freqRange 
        let tickPosLin = tick * wPerHzLin
        let tickPos = Math.log10(tickPosLin)
        xTickPath += ' M ' + (padding.left + tickPos) + ' ' + (padding.top+graphingArea.height) + ' v ' + (xTickHeight);
    }

    //Now that we have those defined we've got to actually draw them
    let yGrid = document.createElementNS(svgNS, 'path')
    yGrid.setAttribute('stroke', '#000')
    yGrid.setAttribute('stroke-width', 0.1)
    yGrid.setAttribute('d', yGridPath);

    let yTick = document.createElementNS(svgNS, 'path')
    yTick.setAttribute('stroke', '#000')
    yTick.setAttribute('stroke-width', '0.2')
    yTick.setAttribute('d', yTickPath);

    let xGrid = document.createElementNS(svgNS, 'path')
    xGrid.setAttribute('stroke', '#000')
    xGrid.setAttribute('stroke-width', 0.1)
    xGrid.setAttribute('d', xGridPath);

    let xTick = document.createElementNS(svgNS, 'path')
    xTick.setAttribute('stroke', '#000')
    xTick.setAttribute('stroke-width', '0.2')
    xTick.setAttribute('d', xTickPath);

    svg.appendChild(yGrid)
    svg.appendChild(xGrid)
    //svg.appendChild(yTick)
    //svg.appendChild(xTick)

    //Now let's define and draw labels

    let xAxisLabel = document.createElementNS(svgNS, 'text')
    xAxisLabel.innerHTML = 'Frequency (Hz)'
    xAxisLabel.setAttribute('x', (padding.left + (graphingArea.width * 0.5)))
    xAxisLabel.setAttribute('y', (padding.top + (graphingArea.height + 30)))
    svg.appendChild(xAxisLabel)

    let yAxisLabel = document.createElementNS(svgNS, 'text')
    yAxisLabel.innerHTML = 'Magnitude (dB)';
    yAxisLabel.setAttribute('x', (-1 * ((padding.top * 0.5) + (graphingArea.height * 0.5))))
    yAxisLabel.setAttribute('y', ((padding.left - 30)))
    yAxisLabel.setAttribute('text-anchor', 'middle')
    yAxisLabel.setAttribute('transform', 'rotate(270)')
    svg.appendChild(yAxisLabel)

    //Now let's define a line

    //In order to get the beginning of the path rendered correctly we need to calculate where the first point
    //on the graph should be outside of the for loop. This also serves as a neat example of how calculating
    //the relative position the point on the y axis works

    //This logic is scoped within an if block so that the variables within aren't globally scoped. This is a 
    //purely stylistic choice, you could just reassign the value of a global variable if you wanted.

    let linePath = '';
 

    for(let i = 0; i < preferredFrequencies.length; i++){
    
        mag = array[i];
        let extent = maxMag - minMag
        freq = preferredFrequencies[i]
        let yPosCoefficient

        if(mag < 0){
            yPosCoefficient = mag / extent
        } else {
            yPosCoefficient = mag / extent
        }

        let realSpaceMagPosY = graphingArea.height * yPosCoefficient
        let adjustedRealSpaceMagPosY = (realSpaceMagPosY * -1) + (graphingArea.height * 0.5)

        console.log("yPosCoefficient = " + yPosCoefficient + " realSpaceMagPosY " + realSpaceMagPosY)

        let extentLog = Math.log10(20000) - Math.log10(20)
        let magLog = Math.log10(freq) - Math.log10(20)
        let magCoefficient = magLog / extentLog 
        let realSpaceMagPosX = (graphingArea.width * magCoefficient) + padding.left;
        
        if(i == 0){
            linePath += ' M ' + padding.left + ' ' + adjustedRealSpaceMagPosY
        } else {
            linePath += ' L ' + realSpaceMagPosX + ' ' + adjustedRealSpaceMagPosY
        }

    }

    
    //Let's draw the line
    let frLine = document.createElementNS(svgNS, 'path')
    frLine.setAttribute('id', 'fr')
    frLine.setAttribute('stroke', 'blue')
    frLine.setAttribute('stroke-width', '1')
    frLine.setAttribute('fill', 'none')
    frLine.setAttribute('d', linePath);
    svg.appendChild(frLine)
}

drawGraph(diffuse)

window.onresize = drawGraph;



