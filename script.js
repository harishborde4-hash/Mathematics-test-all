const motivationalQuotes = [
    "Mathematics is the language in which God has written the universe. - Galileo Galilei",
    "Pure mathematics is, in its way, the poetry of logical ideas. - Albert Einstein",
    "Mathematics is not about numbers, equations, or algorithms: it is about understanding.",
    "In mathematics, you don't understand things. You just get used to them. - John von Neumann",
    "Mathematics is the music of reason. - James Joseph Sylvester",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple.",
    "Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.",
    "Without mathematics, there's nothing you can do. Everything around you is mathematics.",
    "Mathematics is the most beautiful and most powerful creation of the human spirit.",
    "Do not worry about your difficulties in mathematics. I can assure you mine are still greater. - Albert Einstein"
];

const resultQuotes = {
    excellent: ["Outstanding! You're a math genius! 🌟", "Phenomenal! Perfect calculations! ✨", "Incredible! You've mastered this chapter! 🎯"],
    good: ["Great job! Strong mathematical skills! 👍", "Well done! Keep solving! 💪", "Impressive progress! 🚀"],
    average: ["Good effort! More practice needed! 📚", "Keep learning! Math takes practice! 🎓", "Review and improve! 💡"],
    poor: ["Don't give up! Every mathematician started here! 🌱", "Keep trying! Practice makes perfect! 🌈", "Work harder! You can do it! 💪"]
};

const chapterNames = {
    1: "Angle and its Measurement",
    2: "Trigonometry I",
    3: "Trigonometry II",
    4: "Determinants and Matrices",
    5: "Straight Lines",
    6: "Circle",
    7: "Conic Sections",
    8: "Measures of Dispersion",
    9: "Probability",
    10: "Complex Numbers",
    11: "Sequence and Series",
    12: "Permutation and Combination",
    13: "Methods of Induction & Binomial Theorem",
    14: "Sets and Relations",
    15: "Functions",
    16: "Limits",
    17: "Continuity",
    18: "Differentiation"
};

const questionBank = {
    1: [ // Angle and its Measurement
        {id:1, question:"1 radian equals:", options:["180°/π", "π/180°", "90°", "45°"], correctAnswer:0},
        {id:2, question:"π radians equal:", options:["90°", "180°", "270°", "360°"], correctAnswer:1},
        {id:3, question:"The angle subtended by a complete circle is:", options:["π radians", "2π radians", "π/2 radians", "4π radians"], correctAnswer:1},
        {id:4, question:"60° in radians is:", options:["π/6", "π/4", "π/3", "π/2"], correctAnswer:2},
        {id:5, question:"90° in radians is:", options:["π/6", "π/4", "π/3", "π/2"], correctAnswer:3},
        {id:6, question:"Complementary angles sum to:", options:["90°", "180°", "270°", "360°"], correctAnswer:0},
        {id:7, question:"Supplementary angles sum to:", options:["90°", "180°", "270°", "360°"], correctAnswer:1},
        {id:8, question:"One complete revolution is:", options:["2π radians", "π radians", "π/2 radians", "4π radians"], correctAnswer:0},
        {id:9, question:"180° in radians is:", options:["π/2", "π", "2π", "3π"], correctAnswer:1},
        {id:10, question:"The angle in a semicircle is:", options:["45°", "60°", "90°", "180°"], correctAnswer:2},
        {id:11, question:"30° in radians is:", options:["π/6", "π/4", "π/3", "π/2"], correctAnswer:0},
        {id:12, question:"Acute angle is:", options:["Less than 90°", "Equal to 90°", "More than 90°", "Equal to 180°"], correctAnswer:0},
        {id:13, question:"Obtuse angle is:", options:["Less than 90°", "Between 90° and 180°", "More than 180°", "Equal to 90°"], correctAnswer:1},
        {id:14, question:"Reflex angle is:", options:["Less than 180°", "Equal to 180°", "Between 180° and 360°", "More than 360°"], correctAnswer:2},
        {id:15, question:"Right angle in radians is:", options:["π/6", "π/4", "π/3", "π/2"], correctAnswer:3}
    ],
    
    2: [ // Trigonometry I
        {id:1, question:"sin²θ + cos²θ equals:", options:["0", "1", "2", "tan²θ"], correctAnswer:1},
        {id:2, question:"sin(90°) equals:", options:["0", "1", "1/2", "√3/2"], correctAnswer:1},
        {id:3, question:"cos(0°) equals:", options:["0", "1", "1/2", "√3/2"], correctAnswer:1},
        {id:4, question:"tan(45°) equals:", options:["0", "1", "√3", "1/√3"], correctAnswer:1},
        {id:5, question:"sin(30°) equals:", options:["1/2", "√3/2", "1", "0"], correctAnswer:0},
        {id:6, question:"cos(60°) equals:", options:["1/2", "√3/2", "1", "0"], correctAnswer:0},
        {id:7, question:"sin(0°) equals:", options:["0", "1", "1/2", "√3/2"], correctAnswer:0},
        {id:8, question:"cos(90°) equals:", options:["0", "1", "1/2", "√3/2"], correctAnswer:0},
        {id:9, question:"tan(0°) equals:", options:["0", "1", "Undefined", "∞"], correctAnswer:0},
        {id:10, question:"tan(90°) equals:", options:["0", "1", "Undefined", "-1"], correctAnswer:2},
        {id:11, question:"sin(60°) equals:", options:["1/2", "√3/2", "1", "0"], correctAnswer:1},
        {id:12, question:"cos(45°) equals:", options:["1/√2", "√3/2", "1/2", "1"], correctAnswer:0},
        {id:13, question:"1 + tan²θ equals:", options:["sec²θ", "cosec²θ", "cot²θ", "sin²θ"], correctAnswer:0},
        {id:14, question:"1 + cot²θ equals:", options:["sec²θ", "cosec²θ", "tan²θ", "cos²θ"], correctAnswer:1},
        {id:15, question:"sin(-θ) equals:", options:["sinθ", "-sinθ", "cosθ", "-cosθ"], correctAnswer:1}
    ],
    
    3: [ // Trigonometry II
        {id:1, question:"sin(A+B) equals:", options:["sinA·cosB + cosA·sinB", "sinA·cosB - cosA·sinB", "sinA·sinB + cosA·cosB", "cosA·cosB - sinA·sinB"], correctAnswer:0},
        {id:2, question:"cos(A+B) equals:", options:["cosA·cosB + sinA·sinB", "cosA·cosB - sinA·sinB", "sinA·cosB + cosA·sinB", "sinA·cosB - cosA·sinB"], correctAnswer:1},
        {id:3, question:"sin(2θ) equals:", options:["2sinθ", "2sinθ·cosθ", "sin²θ - cos²θ", "cos²θ - sin²θ"], correctAnswer:1},
        {id:4, question:"cos(2θ) equals:", options:["2cos²θ", "cos²θ - sin²θ", "2sinθ·cosθ", "sin²θ + cos²θ"], correctAnswer:1},
        {id:5, question:"tan(A+B) equals:", options:["(tanA + tanB)/(1 - tanA·tanB)", "(tanA + tanB)/(1 + tanA·tanB)", "tanA + tanB", "tanA·tanB"], correctAnswer:1},
        {id:6, question:"sin(A-B) equals:", options:["sinA·cosB - cosA·sinB", "sinA·cosB + cosA·sinB", "cosA·cosB - sinA·sinB", "cosA·cosB + sinA·sinB"], correctAnswer:0},
        {id:7, question:"cos(A-B) equals:", options:["cosA·cosB - sinA·sinB", "cosA·cosB + sinA·sinB", "sinA·cosB - cosA·sinB", "sinA·cosB + cosA·sinB"], correctAnswer:1},
        {id:8, question:"tan(2θ) equals:", options:["2tanθ", "2tanθ/(1 - tan²θ)", "tanθ/(1 - tan²θ)", "2tanθ/(1 + tan²θ)"], correctAnswer:1},
        {id:9, question:"sin³θ - cos³θ equals:", options:["(sinθ - cosθ)(sin²θ + sinθ·cosθ + cos²θ)", "(sinθ - cosθ)(1 + sinθ·cosθ)", "Both A and B", "Neither"], correctAnswer:2},
        {id:10, question:"Maximum value of sinθ is:", options:["0", "1", "-1", "2"], correctAnswer:1},
        {id:11, question:"Minimum value of cosθ is:", options:["0", "1", "-1", "2"], correctAnswer:2},
        {id:12, question:"Period of sinθ is:", options:["π", "2π", "π/2", "4π"], correctAnswer:1},
        {id:13, question:"Period of tanθ is:", options:["π", "2π", "π/2", "4π"], correctAnswer:0},
        {id:14, question:"sin(π/2 - θ) equals:", options:["sinθ", "cosθ", "-sinθ", "-cosθ"], correctAnswer:1},
        {id:15, question:"cos(π - θ) equals:", options:["cosθ", "-cosθ", "sinθ", "-sinθ"], correctAnswer:1}
    ],
    
    4: [ // Determinants and Matrices
        {id:1, question:"Order of matrix [1 2 3] is:", options:["1×3", "3×1", "3×3", "1×1"], correctAnswer:0},
        {id:2, question:"Determinant of 2×2 matrix [a b; c d] is:", options:["ad + bc", "ad - bc", "ab - cd", "ac - bd"], correctAnswer:1},
        {id:3, question:"Identity matrix has:", options:["All ones", "Diagonal ones, rest zeros", "All zeros", "Random numbers"], correctAnswer:1},
        {id:4, question:"Transpose of [1 2; 3 4] is:", options:["[1 3; 2 4]", "[4 3; 2 1]", "[1 2; 3 4]", "[2 1; 4 3]"], correctAnswer:0},
        {id:5, question:"For matrix multiplication AB, columns of A must equal:", options:["Rows of B", "Columns of B", "Rows of A", "Elements of B"], correctAnswer:0},
        {id:6, question:"Determinant of identity matrix is:", options:["0", "1", "-1", "Undefined"], correctAnswer:1},
        {id:7, question:"Singular matrix has determinant:", options:["1", "0", "-1", "Non-zero"], correctAnswer:1},
        {id:8, question:"Symmetric matrix satisfies:", options:["A = Aᵀ", "A = -Aᵀ", "A = A⁻¹", "A = 0"], correctAnswer:0},
        {id:9, question:"Skew-symmetric matrix satisfies:", options:["A = Aᵀ", "A = -Aᵀ", "A = A⁻¹", "A = I"], correctAnswer:1},
        {id:10, question:"For matrices A and B, (AB)ᵀ equals:", options:["AᵀBᵀ", "BᵀAᵀ", "AB", "BA"], correctAnswer:1},
        {id:11, question:"Diagonal elements of skew-symmetric matrix are:", options:["All ones", "All zeros", "Non-zero", "Random"], correctAnswer:1},
        {id:12, question:"Determinant of transpose equals:", options:["Original determinant", "Negative of original", "Zero", "Reciprocal"], correctAnswer:0},
        {id:13, question:"If det(A) = 0, matrix is:", options:["Invertible", "Non-invertible", "Orthogonal", "Symmetric"], correctAnswer:1},
        {id:14, question:"For invertible matrix A, AA⁻¹ equals:", options:["0", "I", "A", "Aᵀ"], correctAnswer:1},
        {id:15, question:"Null matrix has:", options:["All ones", "All zeros", "Diagonal ones", "Random elements"], correctAnswer:1}
    ],
    
    5: [ // Straight Lines
        {id:1, question:"Slope of line parallel to x-axis is:", options:["0", "1", "Undefined", "∞"], correctAnswer:0},
        {id:2, question:"Slope of line parallel to y-axis is:", options:["0", "1", "Undefined", "-1"], correctAnswer:2},
        {id:3, question:"Equation y = mx + c represents:", options:["Circle", "Parabola", "Straight line", "Ellipse"], correctAnswer:2},
        {id:4, question:"Two parallel lines have:", options:["Equal slopes", "Perpendicular slopes", "Zero slopes", "Undefined slopes"], correctAnswer:0},
        {id:5, question:"Product of slopes of perpendicular lines is:", options:["0", "1", "-1", "Undefined"], correctAnswer:2},
        {id:6, question:"Distance between points (x₁,y₁) and (x₂,y₂) is:", options:["√[(x₂-x₁)² + (y₂-y₁)²]", "(x₂-x₁)² + (y₂-y₁)²", "x₂-x₁ + y₂-y₁", "√(x₂-x₁)(y₂-y₁)"], correctAnswer:0},
        {id:7, question:"Slope of line passing through (x₁,y₁) and (x₂,y₂) is:", options:["(y₂-y₁)/(x₂-x₁)", "(x₂-x₁)/(y₂-y₁)", "y₂-y₁", "x₂-x₁"], correctAnswer:0},
        {id:8, question:"Point-slope form of line is:", options:["y - y₁ = m(x - x₁)", "y = mx + c", "ax + by + c = 0", "x/a + y/b = 1"], correctAnswer:0},
        {id:9, question:"Intercept form of line is:", options:["y = mx + c", "x/a + y/b = 1", "ax + by + c = 0", "y - y₁ = m(x - x₁)"], correctAnswer:1},
        {id:10, question:"General form of line is:", options:["y = mx + c", "y - y₁ = m(x - x₁)", "ax + by + c = 0", "x/a + y/b = 1"], correctAnswer:2},
        {id:11, question:"Angle between two lines with slopes m₁ and m₂ is:", options:["tan⁻¹[(m₁-m₂)/(1+m₁m₂)]", "tan⁻¹[(m₁+m₂)/(1-m₁m₂)]", "tan⁻¹(m₁-m₂)", "tan⁻¹(m₁+m₂)"], correctAnswer:0},
        {id:12, question:"Equation of x-axis is:", options:["x = 0", "y = 0", "x = y", "x + y = 0"], correctAnswer:1},
        {id:13, question:"Equation of y-axis is:", options:["x = 0", "y = 0", "x = y", "x + y = 0"], correctAnswer:0},
        {id:14, question:"Mid-point of (x₁,y₁) and (x₂,y₂) is:", options:["((x₁+x₂)/2, (y₁+y₂)/2)", "(x₁+x₂, y₁+y₂)", "((x₁-x₂)/2, (y₁-y₂)/2)", "(x₁-x₂, y₁-y₂)"], correctAnswer:0},
        {id:15, question:"Distance of point (x₁,y₁) from line ax + by + c = 0 is:", options:["|ax₁ + by₁ + c|/√(a² + b²)", "ax₁ + by₁ + c", "√(a² + b²)", "|ax₁ + by₁|"], correctAnswer:0}
    ],
    
    6: [ // Circle
        {id:1, question:"Standard equation of circle with center (h,k) and radius r is:", options:["(x-h)² + (y-k)² = r²", "(x+h)² + (y+k)² = r²", "x² + y² = r²", "(x-h)² - (y-k)² = r²"], correctAnswer:0},
        {id:2, question:"Equation x² + y² = 25 represents circle with radius:", options:["5", "25", "√25", "10"], correctAnswer:0},
        {id:3, question:"Center of circle x² + y² = r² is:", options:["(0,0)", "(r,r)", "(0,r)", "(r,0)"], correctAnswer:0},
        {id:4, question:"General form of circle is:", options:["x² + y² + 2gx + 2fy + c = 0", "x² + y² = r²", "(x-h)² + (y-k)² = r²", "x² - y² = r²"], correctAnswer:0},
        {id:5, question:"For circle x² + y² + 2gx + 2fy + c = 0, center is:", options:["(g,f)", "(-g,-f)", "(2g,2f)", "(-2g,-2f)"], correctAnswer:1},
        {id:6, question:"For circle x² + y² + 2gx + 2fy + c = 0, radius is:", options:["√(g² + f² - c)", "√(g² + f² + c)", "g² + f² - c", "g + f - c"], correctAnswer:0},
        {id:7, question:"Equation of circle with diameter endpoints (x₁,y₁) and (x₂,y₂) is:", options:["(x-x₁)(x-x₂) + (y-y₁)(y-y₂) = 0", "(x+x₁)(x+x₂) + (y+y₁)(y+y₂) = 0", "x² + y² = r²", "None"], correctAnswer:0},
        {id:8, question:"Length of tangent from point (x₁,y₁) to circle x² + y² = r² is:", options:["√(x₁² + y₁² - r²)", "x₁² + y₁² - r²", "√(x₁² + y₁²)", "r"], correctAnswer:0},
        {id:9, question:"Equation of tangent to x² + y² = r² at (x₁,y₁) is:", options:["xx₁ + yy₁ = r²", "xx₁ - yy₁ = r²", "x + y = r", "x₁x + y₁y = r"], correctAnswer:0},
        {id:10, question:"Two circles touch externally if distance between centers equals:", options:["r₁ + r₂", "r₁ - r₂", "|r₁ - r₂|", "√(r₁² + r₂²)"], correctAnswer:0},
        {id:11, question:"Two circles touch internally if distance between centers equals:", options:["r₁ + r₂", "|r₁ - r₂|", "r₁r₂", "√(r₁² + r₂²)"], correctAnswer:1},
        {id:12, question:"Point lies inside circle if:", options:["x₁² + y₁² < r²", "x₁² + y₁² > r²", "x₁² + y₁² = r²", "x₁ + y₁ = r"], correctAnswer:0},
        {id:13, question:"Point lies on circle if:", options:["x₁² + y₁² < r²", "x₁² + y₁² > r²", "x₁² + y₁² = r²", "x₁ + y₁ = r"], correctAnswer:2},
        {id:14, question:"Diameter of circle x² + y² = 49 is:", options:["7", "14", "49", "√49"], correctAnswer:1},
        {id:15, question:"Equation of circle passing through origin with center (h,k) is:", options:["x² + y² + 2hx + 2ky = 0", "x² + y² - 2hx - 2ky = 0", "(x-h)² + (y-k)² = 0", "x² + y² = h² + k²"], correctAnswer:1}
    ],
    
    7: [ // Conic Sections
        {id:1, question:"Parabola, ellipse, hyperbola are called:", options:["Conic sections", "Circular sections", "Linear sections", "Angular sections"], correctAnswer:0},
        {id:2, question:"Standard equation of parabola with vertex at origin and focus on x-axis is:", options:["y² = 4ax", "x² = 4ay", "xy = c", "x² + y² = a²"], correctAnswer:0},
        {id:3, question:"For parabola y² = 4ax, focus is at:", options:["(a,0)", "(0,a)", "(-a,0)", "(0,-a)"], correctAnswer:0},
        {id:4, question:"For parabola y² = 4ax, directrix is:", options:["x = -a", "x = a", "y = -a", "y = a"], correctAnswer:0},
        {id:5, question:"Eccentricity of parabola is:", options:["0", "1", "< 1", "> 1"], correctAnswer:1},
        {id:6, question:"Standard equation of ellipse is:", options:["x²/a² + y²/b² = 1", "x²/a² - y²/b² = 1", "xy = c", "x² + y² = a²"], correctAnswer:0},
        {id:7, question:"For ellipse, eccentricity e is:", options:["e = 0", "0 < e < 1", "e = 1", "e > 1"], correctAnswer:1},
        {id:8, question:"Standard equation of hyperbola is:", options:["x²/a² + y²/b² = 1", "x²/a² - y²/b² = 1", "xy = c", "x² + y² = a²"], correctAnswer:1},
        {id:9, question:"For hyperbola, eccentricity e is:", options:["e = 0", "0 < e < 1", "e = 1", "e > 1"], correctAnswer:3},
        {id:10, question:"Eccentricity of circle is:", options:["0", "1", "< 1", "> 1"], correctAnswer:0},
        {id:11, question:"For ellipse x²/a² + y²/b² = 1 (a > b), foci are at:", options:["(±ae, 0)", "(0, ±ae)", "(±a, 0)", "(0, ±a)"], correctAnswer:0},
        {id:12, question:"Length of latus rectum of parabola y² = 4ax is:", options:["a", "2a", "4a", "a²"], correctAnswer:2},
        {id:13, question:"For ellipse, relation between a, b, e is:", options:["b² = a²(1 - e²)", "a² = b²(1 - e²)", "e² = a² - b²", "e = a - b"], correctAnswer:0},
        {id:14, question:"Asymptotes exist for:", options:["Parabola", "Ellipse", "Hyperbola", "Circle"], correctAnswer:2},
        {id:15, question:"Conic section with e = √2 is:", options:["Circle", "Parabola", "Ellipse", "Hyperbola"], correctAnswer:3}
    ],
    
    8: [ // Measures of Dispersion
        {id:1, question:"Range is difference between:", options:["Mean and median", "Maximum and minimum", "Q₃ and Q₁", "Standard deviation and mean"], correctAnswer:1},
        {id:2, question:"Variance is square of:", options:["Mean", "Standard deviation", "Range", "Median"], correctAnswer:1},
        {id:3, question:"Standard deviation is:", options:["√Variance", "Variance²", "Mean/Variance", "Range/2"], correctAnswer:0},
        {id:4, question:"Coefficient of variation is:", options:["(SD/Mean)×100", "(Mean/SD)×100", "SD×Mean", "Mean + SD"], correctAnswer:0},
        {id:5, question:"Quartile deviation is:", options:["(Q₃ - Q₁)/2", "Q₃ - Q₁", "(Q₃ + Q₁)/2", "Q₃/Q₁"], correctAnswer:0},
        {id:6, question:"Mean deviation is measured from:", options:["Mean", "Median", "Mode", "All of these"], correctAnswer:3},
        {id:7, question:"Most stable measure of dispersion is:", options:["Range", "Quartile deviation", "Standard deviation", "Mean deviation"], correctAnswer:2},
        {id:8, question:"Range is affected by:", options:["All values", "Extreme values", "Middle values", "Mode"], correctAnswer:1},
        {id:9, question:"If all values are same, variance is:", options:["0", "1", "Mean", "Maximum"], correctAnswer:0},
        {id:10, question:"Standard deviation is always:", options:["Negative", "Positive or zero", "Greater than mean", "Less than range"], correctAnswer:1},
        {id:11, question:"For data 2, 4, 6, 8, 10, range is:", options:["5", "6", "8", "10"], correctAnswer:2},
        {id:12, question:"Variance of constants a, a, a, ... is:", options:["a", "0", "a²", "2a"], correctAnswer:1},
        {id:13, question:"Coefficient of variation is useful for comparing:", options:["Same units", "Different units", "Large values only", "Small values only"], correctAnswer:1},
        {id:14, question:"Interquartile range is:", options:["Q₃ - Q₁", "(Q₃ - Q₁)/2", "Q₃ + Q₁", "Q₃/Q₁"], correctAnswer:0},
        {id:15, question:"Standard deviation of 5, 5, 5, 5 is:", options:["5", "0", "20", "1"], correctAnswer:1}
    ],
    
    9: [ // Probability
        {id:1, question:"Probability of sure event is:", options:["0", "1", "0.5", "Undefined"], correctAnswer:1},
        {id:2, question:"Probability of impossible event is:", options:["0", "1", "0.5", "Undefined"], correctAnswer:0},
        {id:3, question:"Range of probability is:", options:["[-1, 1]", "[0, 1]", "[0, ∞]", "(-∞, ∞)"], correctAnswer:1},
        {id:4, question:"If P(A) = 0.3, then P(not A) is:", options:["0.3", "0.7", "1", "0"], correctAnswer:1},
        {id:5, question:"For mutually exclusive events A and B, P(A∩B) is:", options:["0", "1", "P(A)×P(B)", "P(A)+P(B)"], correctAnswer:0},
        {id:6, question:"For independent events A and B, P(A∩B) is:", options:["P(A)+P(B)", "P(A)×P(B)", "P(A)-P(B)", "P(A)/P(B)"], correctAnswer:1},
        {id:7, question:"P(A∪B) equals:", options:["P(A)+P(B)", "P(A)+P(B)-P(A∩B)", "P(A)×P(B)", "P(A)-P(B)"], correctAnswer:1},
        {id:8, question:"Probability of getting head in coin toss is:", options:["1/4", "1/3", "1/2", "2/3"], correctAnswer:2},
        {id:9, question:"Probability of getting 6 in die throw is:", options:["1/6", "1/3", "1/2", "5/6"], correctAnswer:0},
        {id:10, question:"If P(A) = 0.6 and P(B) = 0.4, maximum P(A∪B) is:", options:["0.6", "0.8", "1", "1.2"], correctAnswer:2},
        {id:11, question:"Conditional probability P(A|B) is:", options:["P(A∩B)/P(B)", "P(A)×P(B)", "P(A)+P(B)", "P(B)/P(A)"], correctAnswer:0},
        {id:12, question:"If A and B are independent, P(A|B) equals:", options:["P(A)", "P(B)", "P(A∩B)", "0"], correctAnswer:0},
        {id:13, question:"Sum of all probabilities in sample space is:", options:["0", "0.5", "1", "Varies"], correctAnswer:2},
        {id:14, question:"Probability of drawing ace from deck is:", options:["1/52", "1/13", "4/52", "1/4"], correctAnswer:2},
        {id:15, question:"Complement of event A is:", options:["A'", "A²", "-A", "1/A"], correctAnswer:0}
    ],
    
    10: [ // Complex Numbers
        {id:1, question:"i² equals:", options:["1", "-1", "i", "0"], correctAnswer:1},
        {id:2, question:"i⁴ equals:", options:["1", "-1", "i", "-i"], correctAnswer:0},
        {id:3, question:"Conjugate of (a + ib) is:", options:["a - ib", "-a + ib", "-a - ib", "a + ib"], correctAnswer:0},
        {id:4, question:"Modulus of (3 + 4i) is:", options:["5", "7", "√7", "25"], correctAnswer:0},
        {id:5, question:"Argument of (1 + i) is:", options:["π/4", "π/2", "π", "0"], correctAnswer:0},
        {id:6, question:"Real part of (5 + 3i) is:", options:["5", "3", "8", "i"], correctAnswer:0},
        {id:7, question:"Imaginary part of (2 - 7i) is:", options:["2", "-7", "7", "-7i"], correctAnswer:1},
        {id:8, question:"(a + ib)(a - ib) equals:", options:["a² + b²", "a² - b²", "a² + b²i", "0"], correctAnswer:0},
        {id:9, question:"i³ equals:", options:["1", "-1", "i", "-i"], correctAnswer:3},
        {id:10, question:"Polar form of complex number uses:", options:["r and θ", "a and b", "x and y", "i and j"], correctAnswer:0},
        {id:11, question:"De Moivre's theorem is used for:", options:["Addition", "Subtraction", "Powers and roots", "Division"], correctAnswer:2},
        {id:12, question:"Square root of -1 is:", options:["1", "-1", "i", "Undefined"], correctAnswer:2},
        {id:13, question:"Cube roots of unity are:", options:["1, ω, ω²", "1, i, -i", "1, -1, 0", "1, 2, 3"], correctAnswer:0},
        {id:14, question:"1 + ω + ω² equals:", options:["0", "1", "3", "ω"], correctAnswer:0},
        {id:15, question:"Argument of (-1 + 0i) is:", options:["0", "π/2", "π", "2π"], correctAnswer:2}
    ],
    
    11: [ // Sequence and Series
        {id:1, question:"In AP, nth term is:", options:["a + (n-1)d", "a + nd", "an + d", "a + (n+1)d"], correctAnswer:0},
        {id:2, question:"Sum of n terms of AP is:", options:["n/2[2a + (n-1)d]", "n[2a + (n-1)d]", "2n[a + (n-1)d]", "n[a + d]"], correctAnswer:0},
        {id:3, question:"In GP, nth term is:", options:["ar^n", "ar^(n-1)", "a + r^n", "a/r^n"], correctAnswer:1},
        {id:4, question:"Sum of infinite GP (|r| < 1) is:", options:["a/(1-r)", "a(1-r)", "ar/(1-r)", "a/(1+r)"], correctAnswer:0},
        {id:5, question:"Common difference of AP 2, 5, 8, 11... is:", options:["2", "3", "5", "7"], correctAnswer:1},
        {id:6, question:"Common ratio of GP 3, 6, 12, 24... is:", options:["2", "3", "4", "6"], correctAnswer:0},
        {id:7, question:"If three numbers a, b, c are in AP, then:", options:["b = (a+c)/2", "b² = ac", "b = √(ac)", "b = a + c"], correctAnswer:0},
        {id:8, question:"If three numbers a, b, c are in GP, then:", options:["b = (a+c)/2", "b² = ac", "b = a + c", "b = ac"], correctAnswer:1},
        {id:9, question:"Sum of first n natural numbers is:", options:["n(n+1)", "n(n+1)/2", "n(n-1)/2", "n²"], correctAnswer:1},
        {id:10, question:"Sum of squares of first n natural numbers is:", options:["n(n+1)/2", "n(n+1)(2n+1)/6", "n²", "n(n+1)"], correctAnswer:1},
        {id:11, question:"Arithmetic mean of a and b is:", options:["(a+b)/2", "√(ab)", "2ab/(a+b)", "ab"], correctAnswer:0},
        {id:12, question:"Geometric mean of a and b is:", options:["(a+b)/2", "√(ab)", "2ab/(a+b)", "a+b"], correctAnswer:1},
        {id:13, question:"Harmonic mean of a and b is:", options:["(a+b)/2", "√(ab)", "2ab/(a+b)", "ab/(a+b)"], correctAnswer:2},
        {id:14, question:"For positive numbers, AM ≥ GM ≥:", options:["HM", "0", "1", "AM"], correctAnswer:0},
        {id:15, question:"Sum of n terms of GP is:", options:["a(1-r^n)/(1-r)", "a(r^n-1)/(r-1)", "Both", "Neither"], correctAnswer:2}
    ],
    
    12: [ // Permutation and Combination
        {id:1, question:"n! equals:", options:["n×(n-1)!", "n×(n-1)×...×2×1", "Both A and B", "Neither"], correctAnswer:2},
        {id:2, question:"0! equals:", options:["0", "1", "Undefined", "∞"], correctAnswer:1},
        {id:3, question:"nPr equals:", options:["n!/(n-r)!", "n!/r!", "n!/(n-r)!r!", "(n-r)!/n!"], correctAnswer:0},
        {id:4, question:"nCr equals:", options:["n!/(n-r)!", "n!/r!", "n!/[(n-r)!r!]", "n!(n-r)!"], correctAnswer:2},
        {id:5, question:"nCr = nC(n-r) is:", options:["Always true", "Always false", "Sometimes true", "Never true"], correctAnswer:0},
        {id:6, question:"5! equals:", options:["20", "60", "120", "720"], correctAnswer:2},
        {id:7, question:"Number of ways to arrange n objects is:", options:["n", "n!", "2^n", "n²"], correctAnswer:1},
        {id:8, question:"Number of ways to select r from n is:", options:["nPr", "nCr", "n!", "r!"], correctAnswer:1},
        {id:9, question:"5P3 equals:", options:["10", "20", "60", "120"], correctAnswer:2},
        {id:10, question:"5C3 equals:", options:["5", "10", "15", "20"], correctAnswer:1},
        {id:11, question:"Permutation considers:", options:["Order", "Selection only", "Both", "Neither"], correctAnswer:0},
        {id:12, question:"Combination considers:", options:["Order", "Selection only", "Both", "Neither"], correctAnswer:1},
        {id:13, question:"nC0 equals:", options:["0", "1", "n", "n!"], correctAnswer:1},
        {id:14, question:"nCn equals:", options:["0", "1", "n", "n!"], correctAnswer:1},
        {id:15, question:"Number of diagonals in n-sided polygon is:", options:["n(n-3)/2", "n(n-1)/2", "n!", "n²"], correctAnswer:0}
    ],
    
    13: [ // Methods of Induction & Binomial Theorem
        {id:1, question:"Mathematical induction proves for:", options:["All real numbers", "All natural numbers", "All integers", "All rational numbers"], correctAnswer:1},
        {id:2, question:"First step in induction is:", options:["Assume for n", "Prove for n=1", "Prove for n+1", "Conclude"], correctAnswer:1},
        {id:3, question:"Binomial theorem expands:", options:["(a+b)^n", "(a-b)^n", "Both", "Neither"], correctAnswer:2},
        {id:4, question:"Number of terms in (a+b)^n is:", options:["n", "n+1", "n-1", "2n"], correctAnswer:1},
        {id:5, question:"Middle term in (a+b)^6 is:", options:["3rd term", "4th term", "5th term", "6th term"], correctAnswer:1},
        {id:6, question:"General term in binomial expansion is:", options:["nCr × a^r × b^(n-r)", "nCr × a^(n-r) × b^r", "nPr × a^r × b^(n-r)", "n! × a^r × b^(n-r)"], correctAnswer:1},
        {id:7, question:"Sum of binomial coefficients in (a+b)^n is:", options:["n", "n!", "2^n", "2n"], correctAnswer:2},
        {id:8, question:"Coefficient of x² in (1+x)^5 is:", options:["5", "10", "15", "20"], correctAnswer:1},
        {id:9, question:"(a+b)^2 equals:", options:["a² + b²", "a² + 2ab + b²", "a² - b²", "(a+b)(a-b)"], correctAnswer:1},
        {id:10, question:"(a-b)^2 equals:", options:["a² - b²", "a² + b²", "a² - 2ab + b²", "(a+b)²"], correctAnswer:2},
        {id:11, question:"Pascal's triangle helps in:", options:["Induction", "Binomial expansion", "Integration", "Differentiation"], correctAnswer:1},
        {id:12, question:"In induction, we assume true for:", options:["n", "n+1", "n-1", "all n"], correctAnswer:0},
        {id:13, question:"In induction, we prove for:", options:["n", "n+1", "n-1", "all n"], correctAnswer:1},
        {id:14, question:"nC0 + nC1 + ... + nCn equals:", options:["n", "n!", "2^n", "n²"], correctAnswer:2},
        {id:15, question:"Binomial theorem is used for:", options:["Expansion", "Approximation", "Both", "Neither"], correctAnswer:2}
    ],
    
    14: [ // Sets and Relations
        {id:1, question:"Empty set is denoted by:", options:["∅", "0", "null", "{}"], correctAnswer:0},
        {id:2, question:"Set containing all elements is:", options:["Empty set", "Universal set", "Subset", "Power set"], correctAnswer:1},
        {id:3, question:"If A⊆B and B⊆A, then:", options:["A=B", "A≠B", "A∩B=∅", "A∪B=∅"], correctAnswer:0},
        {id:4, question:"A∪B contains elements in:", options:["A only", "B only", "A or B or both", "A and B"], correctAnswer:2},
        {id:5, question:"A∩B contains elements in:", options:["A only", "B only", "Both A and B", "A or B"], correctAnswer:2},
        {id:6, question:"A-B contains elements in:", options:["A only", "B only", "A but not in B", "B but not in A"], correctAnswer:2},
        {id:7, question:"Number of subsets of set with n elements is:", options:["n", "n!", "2^n", "n²"], correctAnswer:2},
        {id:8, question:"Complement of A is denoted by:", options:["A'", "-A", "1/A", "A⁻¹"], correctAnswer:0},
        {id:9, question:"De Morgan's law: (A∪B)' equals:", options:["A'∪B'", "A'∩B'", "A∩B", "A∪B"], correctAnswer:1},
        {id:10, question:"Reflexive relation satisfies:", options:["(a,a)∈R", "(a,b)∈R⇒(b,a)∈R", "Transitivity", "None"], correctAnswer:0},
        {id:11, question:"Symmetric relation satisfies:", options:["(a,a)∈R", "(a,b)∈R⇒(b,a)∈R", "Transitivity", "None"], correctAnswer:1},
        {id:12, question:"Transitive relation satisfies:", options:["(a,a)∈R", "(a,b)∈R⇒(b,a)∈R", "(a,b)∈R and (b,c)∈R⇒(a,c)∈R", "None"], correctAnswer:2},
        {id:13, question:"Equivalence relation is:", options:["Reflexive only", "Symmetric only", "Reflexive, symmetric, transitive", "None"], correctAnswer:2},
        {id:14, question:"Empty set is subset of:", options:["No set", "Some sets", "Every set", "Universal set only"], correctAnswer:2},
        {id:15, question:"Cardinality of {1,2,3} is:", options:["1", "2", "3", "6"], correctAnswer:2}
    ],
    
    15: [ // Functions
        {id:1, question:"Function f:A→B must have:", options:["Unique image for each element in A", "Multiple images", "No image", "Image in A"], correctAnswer:0},
        {id:2, question:"Domain of function is:", options:["Set of input values", "Set of output values", "Range", "Codomain"], correctAnswer:0},
        {id:3, question:"Range of function is:", options:["Set of input values", "Set of actual output values", "Domain", "Codomain"], correctAnswer:1},
        {id:4, question:"Codomain of f:A→B is:", options:["A", "B", "Range", "Domain"], correctAnswer:1},
        {id:5, question:"One-one function means:", options:["Different inputs have different outputs", "Same output for all inputs", "Multiple outputs", "No output"], correctAnswer:0},
        {id:6, question:"Onto function means:", options:["Range = Codomain", "Range ⊂ Codomain", "Domain = Range", "Bijective"], correctAnswer:0},
        {id:7, question:"Bijective function is:", options:["One-one only", "Onto only", "Both one-one and onto", "Neither"], correctAnswer:2},
        {id:8, question:"Identity function f(x) equals:", options:["0", "1", "x", "x²"], correctAnswer:2},
        {id:9, question:"Constant function f(x) equals:", options:["x", "c (constant)", "x²", "Variable"], correctAnswer:1},
        {id:10, question:"Even function satisfies:", options:["f(-x)=f(x)", "f(-x)=-f(x)", "f(x)=x", "f(x)=0"], correctAnswer:0},
        {id:11, question:"Odd function satisfies:", options:["f(-x)=f(x)", "f(-x)=-f(x)", "f(x)=x", "f(x)=1"], correctAnswer:1},
        {id:12, question:"Composite function (fog)(x) equals:", options:["f(x)g(x)", "f(g(x))", "g(f(x))", "f(x)+g(x)"], correctAnswer:1},
        {id:13, question:"Inverse of f exists if f is:", options:["One-one", "Onto", "Bijective", "Linear"], correctAnswer:2},
        {id:14, question:"Domain of f(x)=1/x is:", options:["All real numbers", "All except 0", "Positive numbers", "Negative numbers"], correctAnswer:1},
        {id:15, question:"Range of f(x)=x² is:", options:["All real numbers", "[0,∞)", "(-∞,∞)", "[-∞,0]"], correctAnswer:1}
    ],
    
    16: [ // Limits
        {id:1, question:"lim(x→0) sinx/x equals:", options:["0", "1", "∞", "Undefined"], correctAnswer:1},
        {id:2, question:"lim(x→∞) 1/x equals:", options:["0", "1", "∞", "Undefined"], correctAnswer:0},
        {id:3, question:"lim(x→a) c equals:", options:["0", "a", "c", "Undefined"], correctAnswer:2},
        {id:4, question:"lim(x→a) x equals:", options:["0", "a", "x", "∞"], correctAnswer:1},
        {id:5, question:"lim(x→0) (1-cosx)/x equals:", options:["0", "1", "∞", "Undefined"], correctAnswer:0},
        {id:6, question:"lim(x→0) tanx/x equals:", options:["0", "1", "∞", "Undefined"], correctAnswer:1},
        {id:7, question:"L'Hospital's rule is used for:", options:["0/0 form", "∞/∞ form", "Both", "Neither"], correctAnswer:2},
        {id:8, question:"lim(x→∞) (1+1/x)^x equals:", options:["0", "1", "e", "∞"], correctAnswer:2},
        {id:9, question:"lim(x→0) e^x equals:", options:["0", "1", "e", "∞"], correctAnswer:1},
        {id:10, question:"lim(x→a) [f(x)+g(x)] equals:", options:["lim f(x) + lim g(x)", "lim f(x) × lim g(x)", "lim f(x) / lim g(x)", "None"], correctAnswer:0},
        {id:11, question:"lim(x→a) [f(x)×g(x)] equals:", options:["lim f(x) + lim g(x)", "lim f(x) × lim g(x)", "lim f(x) / lim g(x)", "None"], correctAnswer:1},
        {id:12, question:"Limit exists if:", options:["Left limit = Right limit", "Left limit ≠ Right limit", "Function is defined", "Always"], correctAnswer:0},
        {id:13, question:"lim(x→0+) 1/x equals:", options:["0", "-∞", "+∞", "1"], correctAnswer:2},
        {id:14, question:"lim(x→0-) 1/x equals:", options:["0", "-∞", "+∞", "1"], correctAnswer:1},
        {id:15, question:"lim(x→0) x² equals:", options:["0", "1", "2", "Undefined"], correctAnswer:0}
    ],
    
    17: [ // Continuity
        {id:1, question:"Function is continuous at x=a if:", options:["f(a) exists", "lim(x→a) f(x) exists", "lim(x→a) f(x) = f(a)", "All of these"], correctAnswer:3},
        {id:2, question:"Polynomial functions are:", options:["Always continuous", "Sometimes continuous", "Never continuous", "Discontinuous at origin"], correctAnswer:0},
        {id:3, question:"f(x)=|x| is:", options:["Continuous everywhere", "Discontinuous at x=0", "Discontinuous everywhere", "Not a function"], correctAnswer:0},
        {id:4, question:"f(x)=1/x is discontinuous at:", options:["x=1", "x=-1", "x=0", "Nowhere"], correctAnswer:2},
        {id:5, question:"If f is continuous and g is continuous, then f+g is:", options:["Continuous", "Discontinuous", "Sometimes continuous", "Not defined"], correctAnswer:0},
        {id:6, question:"Removable discontinuity can be:", options:["Removed by redefining", "Never removed", "Removed by differentiation", "None"], correctAnswer:0},
        {id:7, question:"Jump discontinuity has:", options:["Finite jump", "Infinite jump", "No jump", "Zero jump"], correctAnswer:0},
        {id:8, question:"Infinite discontinuity occurs when:", options:["Function approaches ∞", "Function = 0", "Function is undefined", "Limit exists"], correctAnswer:0},
        {id:9, question:"Intermediate Value Theorem applies to:", options:["Discontinuous functions", "Continuous functions", "All functions", "Differentiable functions only"], correctAnswer:1},
        {id:10, question:"If f is continuous on [a,b], it:", options:["Attains maximum", "Attains minimum", "Both", "Neither"], correctAnswer:2},
        {id:11, question:"Trigonometric functions are:", options:["Continuous in their domain", "Discontinuous everywhere", "Continuous at x=0 only", "Not functions"], correctAnswer:0},
        {id:12, question:"Exponential function e^x is:", options:["Continuous everywhere", "Discontinuous at x=0", "Discontinuous at x=1", "Not continuous"], correctAnswer:0},
        {id:13, question:"Greatest integer function [x] is:", options:["Continuous everywhere", "Discontinuous at integers", "Continuous at integers only", "Never continuous"], correctAnswer:1},
        {id:14, question:"Signum function is discontinuous at:", options:["x=1", "x=-1", "x=0", "Everywhere"], correctAnswer:2},
        {id:15, question:"Continuity implies:", options:["Differentiability", "Limit exists", "Both", "Neither necessarily"], correctAnswer:1}
    ],
    
    18: [ // Differentiation
        {id:1, question:"Derivative of constant is:", options:["0", "1", "Constant", "Undefined"], correctAnswer:0},
        {id:2, question:"Derivative of x^n is:", options:["nx^(n-1)", "x^(n+1)", "nx^n", "x^(n-1)"], correctAnswer:0},
        {id:3, question:"Derivative of sinx is:", options:["cosx", "-cosx", "-sinx", "tanx"], correctAnswer:0},
        {id:4, question:"Derivative of cosx is:", options:["sinx", "-sinx", "cosx", "-cosx"], correctAnswer:1},
        {id:5, question:"Derivative of e^x is:", options:["e^x", "xe^(x-1)", "e^(x-1)", "x"], correctAnswer:0},
        {id:6, question:"Derivative of lnx is:", options:["1/x", "x", "lnx", "e^x"], correctAnswer:0},
        {id:7, question:"Derivative of tanx is:", options:["sec²x", "cosec²x", "-sec²x", "cot²x"], correctAnswer:0},
        {id:8, question:"Product rule: (uv)' equals:", options:["u'v'", "u'v + uv'", "u'v - uv'", "uv"], correctAnswer:1},
        {id:9, question:"Quotient rule: (u/v)' equals:", options:["(u'v - uv')/v²", "(u'v + uv')/v²", "u'/v'", "u/v'"], correctAnswer:0},
        {id:10, question:"Chain rule: d/dx[f(g(x))] equals:", options:["f'(x)g'(x)", "f'(g(x))g'(x)", "f(x)g'(x)", "f'(x)g(x)"], correctAnswer:1},
        {id:11, question:"Second derivative is denoted by:", options:["f'(x)", "f''(x)", "f(x)", "df/dx"], correctAnswer:1},
        {id:12, question:"Derivative of x is:", options:["0", "1", "x", "2x"], correctAnswer:1},
        {id:13, question:"If y=x², then dy/dx equals:", options:["x", "2x", "x²", "2"], correctAnswer:1},
        {id:14, question:"Derivative measures:", options:["Area", "Volume", "Rate of change", "Distance"], correctAnswer:2},
        {id:15, question:"Differentiation of constant multiple: d/dx[cf(x)] equals:", options:["c·f'(x)", "f'(x)", "c·f(x)", "0"], correctAnswer:0}
    ]
};

let currentChapter = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;

window.onload = function() {
    displayRandomQuote();
    setInterval(displayRandomQuote, 10000);
};

function displayRandomQuote() {
    const quoteElement = document.getElementById('motivational-quote');
    if (quoteElement) {
        const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        quoteElement.textContent = randomQuote;
    }
}

function startTest(chapterNumber) {
    currentChapter = chapterNumber;
    currentQuestionIndex = 0;
    userAnswers = new Array(15).fill(null);
    startTime = Date.now();
    document.getElementById('test-title').textContent = `Chapter ${chapterNumber}: ${chapterNames[chapterNumber]}`;
    showScreen('test-screen');
    startTimer();
    displayQuestion();
}

function startTimer() {
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('timer').textContent = `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }, 1000);
}

function displayQuestion() {
    const questions = questionBank[currentChapter];
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="question-box">
            <div class="question-text"><strong>Q${currentQuestionIndex + 1}.</strong> ${question.question}</div>
            <ul class="options-list">
                ${question.options.map((option, index) => `
                    <li class="option-item ${userAnswers[currentQuestionIndex] === index ? 'selected' : ''}" onclick="selectOption(${index})">
                        <div class="option-radio"></div>
                        <span>${String.fromCharCode(65 + index)}. ${option}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    updateProgress();
    updateNavigationButtons();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    displayQuestion();
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / 15) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
    document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1}/15`;
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.style.opacity = currentQuestionIndex === 0 ? '0.5' : '1';
    if (currentQuestionIndex === 14) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < 14) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function submitTest() {
    const unanswered = userAnswers.filter(answer => answer === null).length;
    if (unanswered > 0) {
        const confirm = window.confirm(`You have ${unanswered} unanswered questions. Do you want to submit anyway?`);
        if (!confirm) return;
    }
    clearInterval(timerInterval);
    calculateResults();
}

function calculateResults() {
    const questions = questionBank[currentChapter];
    let correct = 0, wrong = 0, unattempted = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === null) unattempted++;
        else if (answer === questions[index].correctAnswer) correct++;
        else wrong++;
    });
    const percentage = Math.round((correct / 15) * 100);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    displayResults(correct, wrong, unattempted, percentage, minutes, seconds);
}

function displayResults(correct, wrong, unattempted, percentage, minutes, seconds) {
    document.getElementById('score-percentage').textContent = `${percentage}%`;
    document.getElementById('correct-count').textContent = correct;
    document.getElementById('wrong-count').textContent = wrong;
    document.getElementById('unattempted-count').textContent = unattempted;
    document.getElementById('total-score').textContent = `${correct}/15`;
    document.getElementById('time-taken').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    let message = '', quoteCategory = '';
    if (percentage >= 90) { message = '🎉 Excellent! Outstanding knowledge!'; quoteCategory = 'excellent'; }
    else if (percentage >= 75) { message = '👏 Great job! Good understanding!'; quoteCategory = 'good'; }
    else if (percentage >= 50) { message = '👍 Good effort! Keep practicing!'; quoteCategory = 'average'; }
    else { message = '📚 Need more practice! Don\'t give up!'; quoteCategory = 'poor'; }
    document.getElementById('result-message').querySelector('p').textContent = message;
    const randomResultQuote = resultQuotes[quoteCategory][Math.floor(Math.random() * resultQuotes[quoteCategory].length)];
    document.getElementById('result-quote').textContent = randomResultQuote;
    showScreen('result-screen');
}

function reviewAnswers() {
    const questions = questionBank[currentChapter];
    const reviewContent = document.getElementById('review-content');
    let html = '';
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const status = userAnswer === null ? 'unattempted' : (isCorrect ? 'correct' : 'wrong');
        html += `
            <div class="review-question ${status}">
                <div class="review-question-text"><strong>Q${index + 1}.</strong> ${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correctAnswer) className += ' correct-answer';
                        if (optIndex === userAnswer && !isCorrect) className += ' user-answer';
                        return `<div class="${className}">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                            ${optIndex === question.correctAnswer ? ' ✅ Correct' : ''}
                            ${optIndex === userAnswer && !isCorrect ? ' ❌ Your Answer' : ''}
                        </div>`;
                    }).join('')}
                </div>
            </div>
        `;
    });
    reviewContent.innerHTML = html;
    showScreen('review-screen');
}

function retakeTest() { startTest(currentChapter); }
function goHome() { showScreen('home-screen'); if (timerInterval) clearInterval(timerInterval); }
function exitTest() { const confirm = window.confirm('Are you sure you want to exit? Your progress will be lost.'); if (confirm) goHome(); }
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}
