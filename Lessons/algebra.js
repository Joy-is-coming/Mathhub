const algebraLessons = [

    {
        id: 1,
        title: "Introduction to Algebra",
        description: "Learn the basic ideas and language of algebra.",

        content: `
            <h3>What is Algebra?</h3>

            <p>
                Algebra is a branch of mathematics that uses letters,
                numbers and symbols to represent quantities and relationships.<br>
                
            </p>
            

            <h3>Variables</h3>

            <p>
                A variable is a letter or symbol used to represent an unknown
                value. <br> For example, in <strong>x + 5 = 10</strong>, x is a variable.
            </p>

            <h3>Example</h3>

            <p>
                If x = 4, then:
            </p>

            <p>
                x + 3 = 4 + 3 = <strong>7</strong>
            </p>
        `,

        practice: [
            {
                question: "If x = 5, what is x + 3?",
                answer: 8
            },
            {
                question: "If y = 10, what is y - 4?",
                answer: 6
            },
            {
                question: "If x = 7, what is x + 2?",
                answer: 9
            },
            {
                question: "If a = 6, what is a × 2?",
                answer: 12
            },
            {
                question: "If b = 20, what is b ÷ 4?",
                answer: 5
            },

            {
                question: "If b = 20, what is b ÷ 4?",
                answer: 5
            },

            {
                question: "If x = 5, what is x + 3?",
                answer: 8
            },
            {
                question: "If x = 7, what is x - 2?",
                answer: 5
            },
            {
                question: "If x = 4, what is 2x?",
                answer: 8
            },
            {
                question: "If x = 6, what is x + 9?",
                answer: 15
            },
            {
                question: "If x = 10, what is x - 4?",
                answer: 6
            },
            {
                question: "If x = 3, what is 3x?",
                answer: 9
            },
            {
                question: "If x = 8, what is x + 7?",
                answer: 15
            },
            {
                question: "If x = 9, what is x - 5?",
                answer: 4
            },
            {
                question: "If x = 5, what is 4x?",
                answer: 20
            },
            {
                question: "If x = 12, what is x + 6?",
                answer: 18
            },
            {
                question: "If x = 15, what is x - 7?",
                answer: 8
            },
            {
                question: "If x = 4, what is 5x?",
                answer: 20
            },
            {
                question: "If x = 6, what is x + 8?",
                answer: 14
            },
            {
                question: "If x = 11, what is x - 3?",
                answer: 8
            },
            {
                question: "If x = 7, what is 2x + 1?",
                answer: 15
            },
            {
                question: "If x = 5, what is 3x + 2?",
                answer: 17
            },
            {
                question: "If x = 8, what is 2x - 3?",
                answer: 13
            },
            {
                question: "If x = 10, what is 3x - 5?",
                answer: 25
            },
            {
                question: "If x = 3, what is 4x + 1?",
                answer: 13
            },
            {
                question: "If x = 9, what is 2x + 4?",
                answer: 22
            },
            {
                question: "If x = 6, what is 3x - 4?",
                answer: 14
            },
            {
                question: "If x = 7, what is 4x - 2?",
                answer: 26
            },
            {
                question: "If x = 5, what is 2x + 6?",
                answer: 16
            },
            {
                question: "If x = 12, what is 2x - 7?",
                answer: 17
            },
            {
                question: "If x = 4, what is x + 12?",
                answer: 16
            },
            {
                question: "If x = 9, what is x - 6?",
                answer: 3
            },
            {
                question: "If x = 7, what is 3x?",
                answer: 21
            },
            {
                question: "If x = 11, what is 2x?",
                answer: 22
            },
            {
                question: "If x = 5, what is x + 14?",
                answer: 19
            },
            {
                question: "If x = 13, what is x - 8?",
                answer: 5
            },
            {
                question: "If x = 6, what is 4x + 2?",
                answer: 26
            },
            {
                question: "If x = 8, what is 3x - 1?",
                answer: 23
            },
            {
                question: "If x = 10, what is 2x + 5?",
                answer: 25
            },
            {
                question: "If x = 4, what is 5x - 3?",
                answer: 17
            },
            {
                question: "If x = 9, what is 2x + 7?",
                answer: 25
            },
            {
                question: "If x = 6, what is 5x - 4?",
                answer: 26
            },
            {
                question: "If x = 3, what is 6x + 2?",
                answer: 20
            },
            {
                question: "If x = 7, what is 3x + 5?",
                answer: 26
            },
            {
                question: "If x = 12, what is 2x + 3?",
                answer: 27
            },
            {
                question: "If x = 5, what is 4x - 6?",
                answer: 14
            },
            {
                question: "If x = 8, what is 5x + 1?",
                answer: 41
            },
            {
                question: "If x = 10, what is 4x - 7?",
                answer: 33
            },
            {
                question: "If x = 4, what is 3x + 8?",
                answer: 20
            },
            {
                question: "If x = 9, what is 5x - 2?",
                answer: 43
            },
            {
                question: "If x = 6, what is 2(x + 4)?",
                answer: 20
            },
            {
                question: "If x = 7, what is 3(x - 2)?",
                answer: 15
            },
            {
                question: "If x = 5, what is 4(x + 3) - 2?",
                answer: 30
            },
            {
                question: "If x = 8, what is 2(x - 3) + 5?",
                answer: 15
            },
            {
                question: "If x = 9, what is 3(x + 2) - 4?",
                answer: 29
            },
            {
                question: "If x = 4, what is 5(x - 1) + 3?",
                answer: 18
            },
            {
                question: "If x = 6, what is 4(x + 2) - 5?",
                answer: 27
            },
            {
                question: "If x = 10, what is 2(x - 4) + 7?",
                answer: 19
            },
            {
                question: "If x = 7, what is 5(x + 1) - 6?",
                answer: 34
            },
            {
                question: "If x = 12, what is 3(x - 5) + 2?",
                answer: 23
            },

            {
                question: "If x = 8, what is (x + 4) / 2?",
                answer: 6
            },
            {
                question: "If x = 10, what is (x - 4) / 2?",
                answer: 3
            },
            {
                question: "If x = 12, what is (2x + 6) / 3?",
                answer: 10
            },
            {
                question: "If x = 9, what is (3x - 6) / 3?",
                answer: 7
            },
            {
                question: "If x = 15, what is (x + 5) / 4?",
                answer: 5
            },
            {
                question: "If x = 14, what is (2x - 4) / 2?",
                answer: 12
            },
            {
                question: "If x = 18, what is (x - 6) / 3?",
                answer: 4
            },
            {
                question: "If x = 16, what is (3x + 8) / 4?",
                answer: 14
            },
            {
                question: "If x = 20, what is (2x - 10) / 5?",
                answer: 6
            },
            {
                question: "If x = 11, what is (4x + 4) / 4?",
                answer: 12
            },

            {
                question: "If x = 5, what is x² + 3?",
                answer: 28
            },
            {
                question: "If x = 6, what is x² - 4?",
                answer: 32
            },
            {
                question: "If x = 7, what is 2x²?",
                answer: 98
            },
            {
                question: "If x = 4, what is x² + 2x?",
                answer: 24
            },
            {
                question: "If x = 8, what is x² - 3x?",
                answer: 40
            },
            {
                question: "If x = 5, what is 3x² - 4?",
                answer: 71
            },
            {
                question: "If x = 9, what is x² + 2x - 5?",
                answer: 94
            },
            {
                question: "If x = 6, what is 2x² + 3x?",
                answer: 90
            },
            {
                question: "If x = 10, what is x² - 2x + 1?",
                answer: 81
            },
            {
                question: "If x = 4, what is 3x² + 2x - 5?",
                answer: 51
            },

            {
                question: "If x = -3, what is x + 8?",
                answer: 5
            },
            {
                question: "If x = -5, what is x - 4?",
                answer: -9
            },
            {
                question: "If x = -6, what is 2x + 5?",
                answer: -7
            },
            {
                question: "If x = -4, what is 3x - 2?",
                answer: -14
            },
            {
                question: "If x = -7, what is 2(x + 5)?",
                answer: -4
            },
            {
                question: "If x = -3, what is 4(x - 2)?",
                answer: -20
            },
            {
                question: "If x = -5, what is x² + 2?",
                answer: 27
            },
            {
                question: "If x = -4, what is x² - 3x?",
                answer: 28
            },
            {
                question: "If x = -6, what is 2x² - 4?",
                answer: 68
            },
            {
                question: "If x = -2, what is 3x² + 5x?",
                answer: 2
            },

            {
                question: "If x = 3 and y = 5, what is x + y?",
                answer: 8
            },
            {
                question: "If x = 4 and y = 7, what is 2x + y?",
                answer: 15
            },
            {
                question: "If x = 6 and y = 3, what is 3x - y?",
                answer: 15
            },
            {
                question: "If x = 5 and y = 2, what is xy + 4?",
                answer: 14
            },
            {
                question: "If x = 8 and y = 3, what is x² - y?",
                answer: 61
            },
            {
                question: "If x = 4 and y = 6, what is 2(x + y)?",
                answer: 20
            },
            {
                question: "If x = 7 and y = 2, what is x² + y²?",
                answer: 53
            },
            {
                question: "If x = 9 and y = 4, what is 2x - 3y?",
                answer: 6
            },
            {
                question: "If x = 5 and y = 3, what is 3x + 2y - 4?",
                answer: 17
            },
            {
                question: "If x = 6 and y = 4, what is (x + y)²?",
                answer: 100
            }
        ]
    },


    {
        id: 2,
        title: "Algebraic Expressions",
        description: "Learn how numbers and variables form algebraic expressions.",

        content: `
            <h3>What is an Algebraic Expression?</h3>

            <p>
                An algebraic expression is a combination of numbers,
                variables and mathematical operations.
            </p>

            <p>
                Examples include:
                <strong>3x + 5</strong>,
                <strong>2a - 7</strong> and
                <strong>4y</strong>.
            </p>

            <h3>Terms</h3>

            <p>
                The parts of an expression separated by addition or subtraction
                signs are called terms.
            </p>

            <p>
                In <strong>3x + 5</strong>, the terms are
                <strong>3x</strong> and <strong>5</strong>.
            </p>

            <h3>Example</h3>

            <p>
                If x = 2, find 3x + 5.
            </p>

            <p>
                3(2) + 5 = 6 + 5 = <strong>11</strong>
            </p>
        `,

        practice: [
            {
                question: "If x = 2, what is 3x + 5?",
                answer: 11
            },
            {
                question: "If x = 4, what is 2x + 3?",
                answer: 11
            },
            {
                question: "If y = 5, what is 4y?",
                answer: 20
            },
            {
                question: "If a = 3, what is 5a + 2?",
                answer: 17
            },
            {
                question: "If b = 6, what is 2b - 4?",
                answer: 8
            },

            {
                question: "If x = 3, what is x + 5?",
                answer: 8
            },
            {
                question: "If x = 7, what is x - 2?",
                answer: 5
            },
            {
                question: "If x = 4, what is 2x?",
                answer: 8
            },
            {
                question: "If x = 6, what is x + 9?",
                answer: 15
            },
            {
                question: "If x = 10, what is x - 3?",
                answer: 7
            },
            {
                question: "If x = 5, what is 3x?",
                answer: 15
            },
            {
                question: "If x = 8, what is x + 4?",
                answer: 12
            },
            {
                question: "If x = 9, what is x - 6?",
                answer: 3
            },
            {
                question: "If x = 2, what is 4x?",
                answer: 8
            },
            {
                question: "If x = 11, what is x + 7?",
                answer: 18
            },
            {
                question: "If x = 12, what is x - 5?",
                answer: 7
            },
            {
                question: "If x = 3, what is 5x?",
                answer: 15
            },
            {
                question: "If x = 7, what is x + 8?",
                answer: 15
            },
            {
                question: "If x = 15, what is x - 9?",
                answer: 6
            },
            {
                question: "If x = 6, what is 4x?",
                answer: 24
            },
            {
                question: "If x = 9, what is x + 11?",
                answer: 20
            },
            {
                question: "If x = 13, what is x - 4?",
                answer: 9
            },
            {
                question: "If x = 5, what is 6x?",
                answer: 30
            },
            {
                question: "If x = 8, what is x + 13?",
                answer: 21
            },
            {
                question: "If x = 14, what is x - 7?",
                answer: 7
            },
            {
                question: "If x = 4, what is 2x + 3?",
                answer: 11
            },
            {
                question: "If x = 5, what is 3x + 2?",
                answer: 17
            },
            {
                question: "If x = 6, what is 4x - 5?",
                answer: 19
            },
            {
                question: "If x = 7, what is 2x + 8?",
                answer: 22
            },
            {
                question: "If x = 8, what is 5x - 3?",
                answer: 37
            },
            {
                question: "If x = 9, what is 3x + 4?",
                answer: 31
            },
            {
                question: "If x = 10, what is 2x - 7?",
                answer: 13
            },
            {
                question: "If x = 3, what is 6x + 1?",
                answer: 19
            },
            {
                question: "If x = 11, what is 4x - 6?",
                answer: 38
            },
            {
                question: "If x = 12, what is 3x + 5?",
                answer: 41
            },
            {
                question: "If x = 5, what is 7x - 4?",
                answer: 31
            },
            {
                question: "If x = 6, what is 5x + 7?",
                answer: 37
            },
            {
                question: "If x = 8, what is 4x - 9?",
                answer: 23
            },
            {
                question: "If x = 7, what is 6x + 2?",
                answer: 44
            },
            {
                question: "If x = 9, what is 5x - 8?",
                answer: 37
            },
            {
                question: "If x = 4, what is 8x + 3?",
                answer: 35
            },
            {
                question: "If x = 10, what is 7x - 5?",
                answer: 65
            },
            {
                question: "If x = 12, what is 2x + 11?",
                answer: 35
            },
            {
                question: "If x = 15, what is 3x - 7?",
                answer: 38
            },
            {
                question: "If x = 13, what is 4x + 6?",
                answer: 58
            },
            {
                question: "If x = 3, what is 2(x + 4)?",
                answer: 14
            },
            {
                question: "If x = 5, what is 3(x - 2)?",
                answer: 9
            },
            {
                question: "If x = 6, what is 2(x + 5) - 3?",
                answer: 19
            },
            {
                question: "If x = 7, what is 3(x - 1) + 4?",
                answer: 22
            },
            {
                question: "If x = 8, what is 4(x + 2)?",
                answer: 40
            },
            {
                question: "If x = 9, what is 2(x - 3) + 5?",
                answer: 17
            },
            {
                question: "If x = 4, what is 5(x + 1) - 2?",
                answer: 23
            },
            {
                question: "If x = 10, what is 3(x - 4) + 6?",
                answer: 24
            },
            {
                question: "If x = 6, what is 4(x + 3) - 5?",
                answer: 31
            },
            {
                question: "If x = 7, what is 5(x - 2) + 3?",
                answer: 28
            },
            {
                question: "If x = 5, what is 2(x + 6) + 4?",
                answer: 26
            },
            {
                question: "If x = 8, what is 3(x - 2) + 7?",
                answer: 25
            },
            {
                question: "If x = 9, what is 4(x + 1) - 6?",
                answer: 34
            },
            {
                question: "If x = 11, what is 2(x - 5) + 9?",
                answer: 21
            },
            {
                question: "If x = 12, what is 3(x + 2) - 7?",
                answer: 35
            },
            {
                question: "If x = 6, what is 5(x - 1) + 8?",
                answer: 33
            },
            {
                question: "If x = 10, what is 2(x + 4) - 9?",
                answer: 19
            },
            {
                question: "If x = 7, what is 4(x - 2) + 11?",
                answer: 31
            },
            {
                question: "If x = 9, what is 5(x + 2) - 4?",
                answer: 51
            },
            {
                question: "If x = 13, what is 2(x - 4) + 7?",
                answer: 25
            },
            {
                question: "If x = -3, what is x + 8?",
                answer: 5
            },
            {
                question: "If x = -5, what is x - 4?",
                answer: -9
            },
            {
                question: "If x = -4, what is 2x + 7?",
                answer: -1
            },
            {
                question: "If x = -6, what is 3x - 2?",
                answer: -20
            },
            {
                question: "If x = -2, what is 4x + 9?",
                answer: 1
            },
            {
                question: "If x = -7, what is 2(x + 3)?",
                answer: -8
            },
            {
                question: "If x = -5, what is 3(x - 2)?",
                answer: -21
            },
            {
                question: "If x = -4, what is 5x + 6?",
                answer: -14
            },
            {
                question: "If x = -3, what is 2(x - 5) + 4?",
                answer: -12
            },
            {
                question: "If x = -6, what is 3(x + 4) - 2?",
                answer: -8
            },
            {
                question: "If x = 12, what is (x + 4) / 2?",
                answer: 8
            },
            {
                question: "If x = 15, what is (x - 3) / 4?",
                answer: 3
            },
            {
                question: "If x = 18, what is (2x + 6) / 3?",
                answer: 14
            },
            {
                question: "If x = 20, what is (x + 4) / 6?",
                answer: 4
            },
            {
                question: "If x = 14, what is (3x - 6) / 6?",
                answer: 6
            },
            {
                question: "If x = 3, what is x²?",
                answer: 9
            },
            {
                question: "If x = 5, what is x² + 2?",
                answer: 27
            },
            {
                question: "If x = 6, what is x² - 5?",
                answer: 31
            },
            {
                question: "If x = 4, what is 2x²?",
                answer: 32
            },
            {
                question: "If x = 7, what is x² + x?",
                answer: 56
            },
            {
                question: "If x = 8, what is x² - 3x?",
                answer: 40
            },
            {
                question: "If x = 5, what is 3x² - 4?",
                answer: 71
            },
            {
                question: "If x = 6, what is 2x² + 3?",
                answer: 75
            },
            {
                question: "If x = 9, what is x² - 2x?",
                answer: 63
            },
            {
                question: "If x = 10, what is x² + 3x - 5?",
                answer: 125
            },
            {
                question: "If x = 4 and y = 3, what is x + y?",
                answer: 7
            },
            {
                question: "If x = 5 and y = 2, what is 2x + y?",
                answer: 12
            },
            {
                question: "If x = 6 and y = 4, what is 3x - y?",
                answer: 14
            },
            {
                question: "If x = 7 and y = 3, what is xy + 2?",
                answer: 23
            },
            {
                question: "If x = 8 and y = 2, what is x² + y?",
                answer: 66
            },
            {
                question: "If x = 5 and y = 4, what is 2(x + y) - 3?",
                answer: 15
            },
            {
                question: "If x = 6 and y = 3, what is x² - 2y?",
                answer: 30
            },
            {
                question: "If x = 7 and y = 2, what is 3x + 4y?",
                answer: 29
            },
            {
                question: "If x = 4 and y = 5, what is (x + y)²?",
                answer: 81
            },
            {
                question: "If x = 6 and y = 4, what is 2x² - y?",
                answer: 68
            }
        ]
    },


    {
        id: 3,
        title: "Like and Unlike Terms",
        description: "Learn how to identify and combine like terms.",

        content: `
            <h3>Like Terms</h3>

            <p>
                Like terms are terms that have the same variables raised
                to the same powers.
            </p>

            <p>
                Examples:
                <strong>3x</strong> and <strong>5x</strong>
                are like terms.
            </p>

            <h3>Unlike Terms</h3>

            <p>
                Unlike terms have different variables or different powers.
            </p>

            <p>
                For example, <strong>3x</strong> and <strong>4y</strong>
                are unlike terms.
            </p>

            <h3>Combining Like Terms</h3>

            <p>
                3x + 5x = 8x
            </p>
        `,

        practice: [
            {
                question: "Simplify: 3x + 5x. What is the coefficient of x?",
                answer: 8
            },
            {
                question: "Simplify: 7x + 2x. What is the coefficient of x?",
                answer: 9
            },
            {
                question: "Simplify: 10y - 4y. What is the coefficient of y?",
                answer: 6
            },
            {
                question: "Simplify: 6a + 3a. What is the coefficient of a?",
                answer: 9
            },
            {
                question: "Simplify: 12b - 5b. What is the coefficient of b?",
                answer: 7
            },
            {
                question: "Are 3x and 5x like terms? Answer yes or no.",
                answer: "yes"
            },
            {
                question: "Are 4y and 7y like terms? Answer yes or no.",
                answer: "yes"
            },
            {
                question: "Are 3x and 4y like terms? Answer yes or no.",
                answer: "no"
            },
            {
                question: "Are 6a and 2a like terms? Answer yes or no.",
                answer: "yes"
            },
            {
                question: "Are 5x and 5x² like terms? Answer yes or no.",
                answer: "no"
            },
            {
                question: "Are 7m and 3n like terms? Answer yes or no.",
                answer: "no"
            },
            {
                question: "What is the coefficient of x in 8x?",
                answer: 8
            },
            {
                question: "What is the coefficient of y in 12y?",
                answer: 12
            },
            {
                question: "What is the coefficient of a in 5a?",
                answer: 5
            },
            {
                question: "What is the coefficient of m in 9m?",
                answer: 9
            },
            {
                question: "Simplify: 3x + 5x.",
                answer: "8x"
            },
            {
                question: "Simplify: 4y + 6y.",
                answer: "10y"
            },
            {
                question: "Simplify: 7a + 2a.",
                answer: "9a"
            },
            {
                question: "Simplify: 5m + 3m.",
                answer: "8m"
            },
            {
                question: "Simplify: 9p + 4p.",
                answer: "13p"
            },
            {
                question: "Simplify: 8x - 3x.",
                answer: "5x"
            },
            {
                question: "Simplify: 10y - 4y.",
                answer: "6y"
            },
            {
                question: "Simplify: 12a - 5a.",
                answer: "7a"
            },
            {
                question: "Simplify: 15m - 6m.",
                answer: "9m"
            },
            {
                question: "Simplify: 11p - 3p.",
                answer: "8p"
            },
            {
                question: "What is the coefficient of x in 14x?",
                answer: 14
            },
            {
                question: "What is the coefficient of y in -7y?",
                answer: -7
            },
            {
                question: "What is the coefficient of a in -9a?",
                answer: -9
            },
            {
                question: "Simplify: 6x + 4x + 2x.",
                answer: "12x"
            },
            {
                question: "Simplify: 3y + 5y + 7y.",
                answer: "15y"
            },
            {
                question: "Simplify: 2a + 6a + 4a.",
                answer: "12a"
            },
            {
                question: "Simplify: 9m - 3m + 2m.",
                answer: "8m"
            },
            {
                question: "Simplify: 10p - 4p - 2p.",
                answer: "4p"
            },
            {
                question: "Simplify: 7x + 3x - 5x.",
                answer: "5x"
            },
            {
                question: "Simplify: 12y - 5y + 2y.",
                answer: "9y"
            },
            {
                question: "Simplify: 8a + 6a - 4a.",
                answer: "10a"
            },
            {
                question: "Simplify: 15m - 7m + 3m.",
                answer: "11m"
            },
            {
                question: "Simplify: 20p - 8p - 4p.",
                answer: "8p"
            },
            {
                question: "Simplify: 4x + 3y + 5x.",
                answer: "9x + 3y"
            },
            {
                question: "Simplify: 6a + 2b + 4a.",
                answer: "10a + 2b"
            },
            {
                question: "Simplify: 7m + 5n - 2m.",
                answer: "5m + 5n"
            },
            {
                question: "Simplify: 9x + 4y - 3x.",
                answer: "6x + 4y"
            },
            {
                question: "Simplify: 8a - 3b + 5a.",
                answer: "13a - 3b"
            },
            {
                question: "Simplify: 12p + 4q - 7p.",
                answer: "5p + 4q"
            },
            {
                question: "Simplify: 10x + 3y - 4x + 2y.",
                answer: "6x + 5y"
            },
            {
                question: "Simplify: 7a + 5b + 3a - 2b.",
                answer: "10a + 3b"
            },
            {
                question: "Simplify: 9m - 4n + 2m + 6n.",
                answer: "11m + 2n"
            },
            {
                question: "Simplify: 15x + 2y - 5x - y.",
                answer: "10x + y"
            },
            {
                question: "Simplify: 8a - 3b + 4a + 5b.",
                answer: "12a + 2b"
            },
            {
                question: "Simplify: 6x + 4y - 2x + 3y.",
                answer: "4x + 7y"
            },
            {
                question: "Simplify: 11m + 3n - 6m - n.",
                answer: "5m + 2n"
            },
            {
                question: "Simplify: 14p - 5q + 3p + 2q.",
                answer: "17p - 3q"
            },
            {
                question: "Simplify: 20x - 7y - 8x + 4y.",
                answer: "12x - 3y"
            },
            {
                question: "Simplify: -3x + 7x.",
                answer: "4x"
            },
            {
                question: "Simplify: -5y + 9y.",
                answer: "4y"
            },
            {
                question: "Simplify: 8a - 12a.",
                answer: "-4a"
            },
            {
                question: "Simplify: -6m - 4m.",
                answer: "-10m"
            },
            {
                question: "Simplify: -9p + 5p.",
                answer: "-4p"
            },
            {
                question: "Simplify: -7x + 3x - 2x.",
                answer: "-6x"
            },
            {
                question: "Simplify: 12y - 15y + 4y.",
                answer: "y"
            },
            {
                question: "Simplify: -8a + 5a + 6a.",
                answer: "3a"
            },
            {
                question: "Simplify: 10m - 14m + 3m.",
                answer: "-m"
            },
            {
                question: "Simplify: -4p - 6p + 15p.",
                answer: "5p"
            },
            {
                question: "Simplify: -3x + 5y + 8x - 2y.",
                answer: "5x + 3y"
            },
            {
                question: "Simplify: 7a - 4b - 10a + 6b.",
                answer: "-3a + 2b"
            },
            {
                question: "Simplify: -5m + 3n + 8m - n.",
                answer: "3m + 2n"
            },
            {
                question: "Simplify: 12p - 7q - 15p + 2q.",
                answer: "-3p - 5q"
            },
            {
                question: "Simplify: -9x + 4y + 3x - 8y.",
                answer: "-6x - 4y"
            },
            {
                question: "Are 3x² and 7x² like terms? Answer yes or no.",
                answer: "yes"
            },
            {
                question: "Are 4x² and 4x like terms? Answer yes or no.",
                answer: "no"
            },
            {
                question: "Are 5a² and 9a² like terms? Answer yes or no.",
                answer: "yes"
            },
            {
                question: "Are 6x² and 3y² like terms? Answer yes or no.",
                answer: "no"
            },
            {
                question: "Simplify: 3x² + 5x².",
                answer: "8x²"
            },
            {
                question: "Simplify: 7y² - 2y².",
                answer: "5y²"
            },
            {
                question: "Simplify: 4a² + 6a² - 3a².",
                answer: "7a²"
            },
            {
                question: "Simplify: 10x² - 4x² + 2x².",
                answer: "8x²"
            },
            {
                question: "Simplify: 8m² + 3m² - 5m².",
                answer: "6m²"
            },
            {
                question: "Simplify: 12p² - 7p² - 2p².",
                answer: "3p²"
            },
            {
                question: "Simplify: 3x² + 4x + 5x².",
                answer: "8x² + 4x"
            },
            {
                question: "Simplify: 6y² + 3y - 2y².",
                answer: "4y² + 3y"
            },
            {
                question: "Simplify: 8a² - 4a + 3a² + 2a.",
                answer: "11a² - 2a"
            },
            {
                question: "Simplify: 10m² + 5m - 4m² - 2m.",
                answer: "6m² + 3m"
            },
            {
                question: "Simplify: 7x² - 3x + 5x² + 8x.",
                answer: "12x² + 5x"
            },
            {
                question: "Simplify: 4a² + 3a + 6a² - 5a.",
                answer: "10a² - 2a"
            },
            {
                question: "Simplify: 9y² - 4y + 2y² + 7y.",
                answer: "11y² + 3y"
            },
            {
                question: "Simplify: 12x² + 5x - 7x² - 9x.",
                answer: "5x² - 4x"
            },
            {
                question: "Simplify: 15a² - 8a + 3a² + 2a.",
                answer: "18a² - 6a"
            },
            {
                question: "Simplify: 5x + 3y + 2x - 4y + 7x.",
                answer: "14x - y"
            },
            {
                question: "Simplify: 8a - 3b + 5a + 7b - 2a.",
                answer: "11a + 4b"
            },
            {
                question: "Simplify: 6x² + 4x - 2x² + 3x - 5.",
                answer: "4x² + 7x - 5"
            },
            {
                question: "Simplify: 9a² - 3a + 4a² + 7a - 2.",
                answer: "13a² + 4a - 2"
            },
            {
                question: "Simplify: 12x² + 5x - 4x² - 9x + 6.",
                answer: "8x² - 4x + 6"
            },
            {
                question: "Simplify: 7y² - 3y + 5y² + 8y - 4.",
                answer: "12y² + 5y - 4"
            },
            {
                question: "Simplify: 10a² + 4a - 6a² - 9a + 7.",
                answer: "4a² - 5a + 7"
            },
            {
                question: "Simplify: 15x² - 7x + 3x² + 2x - 5.",
                answer: "18x² - 5x - 5"
            },
            {
                question: "Simplify: 8m² + 6m - 3m² - 10m + 4.",
                answer: "5m² - 4m + 4"
            },
            {
                question: "Simplify: 12p² - 5p + 7p² + 3p - 9.",
                answer: "19p² - 2p - 9"
            },

            {
                question: "Are 4x and 7x like terms? Type yes or no.",
                answer: "yes"
            },
            {
                question: "Are 3a and 5b like terms? Type yes or no.",
                answer: "no"
            },
            {
                question: "Simplify: 6x + 4x. What is the coefficient of x?",
                answer: 10
            },

        ]
    },


    {
        id: 4,
        title: "Simplifying Algebraic Expressions",
        description: "Learn how to simplify algebraic expressions.",

        content: `
            <h3>What Does Simplify Mean?</h3>

            <p>
                Simplifying an expression means reducing it to its simplest
                equivalent form.
            </p>

            <h3>Example</h3>

            <p>
                Simplify:
            </p>

            <p>
                4x + 3x + 2
            </p>

            <p>
                Combine the like terms:
            </p>

            <p>
                4x + 3x = 7x
            </p>

            <p>
                Therefore:
                <strong>7x + 2</strong>
            </p>
        `,

        practice: [
            {
                question: "Simplify 4x + 3x. What is the coefficient of x?",
                answer: 7
            },
            {
                question: "Simplify 8x - 3x. What is the coefficient of x?",
                answer: 5
            },
            {
                question: "Simplify 5y + 6y. What is the coefficient of y?",
                answer: 11
            },
            {
                question: "Simplify 9a - 4a. What is the coefficient of a?",
                answer: 5
            },
            {
                question: "Simplify 7b + 2b. What is the coefficient of b?",
                answer: 9
            },
            {
                question: "Simplify 4x + 3x. What is the coefficient of x?",
                answer: 7
            },
            {
                question: "Simplify 2x + 5x. What is the coefficient of x?",
                answer: 7
            },
            {
                question: "Simplify 6x + 2x. What is the coefficient of x?",
                answer: 8
            },
            {
                question: "Simplify 3y + 4y. What is the coefficient of y?",
                answer: 7
            },
            {
                question: "Simplify 5a + 3a. What is the coefficient of a?",
                answer: 8
            },
            {
                question: "Simplify 7m + 2m. What is the coefficient of m?",
                answer: 9
            },
            {
                question: "Simplify 9x + x. What is the coefficient of x?",
                answer: 10
            },
            {
                question: "Simplify 4y + 6y. What is the coefficient of y?",
                answer: 10
            },
            {
                question: "Simplify 8a + 5a. What is the coefficient of a?",
                answer: 13
            },
            {
                question: "Simplify 3m + 7m. What is the coefficient of m?",
                answer: 10
            },

            {
                question: "Simplify 4x + 3x + 2. What is the simplified expression?",
                answer: "7x + 2"
            },
            {
                question: "Simplify 5x + 2x + 4. What is the simplified expression?",
                answer: "7x + 4"
            },
            {
                question: "Simplify 6y + 3y + 5. What is the simplified expression?",
                answer: "9y + 5"
            },
            {
                question: "Simplify 2a + 7a + 3. What is the simplified expression?",
                answer: "9a + 3"
            },
            {
                question: "Simplify 8m + 4m + 1. What is the simplified expression?",
                answer: "12m + 1"
            },
            {
                question: "Simplify 3x + 5 + 4x. What is the simplified expression?",
                answer: "7x + 5"
            },
            {
                question: "Simplify 7y + 2 + 3y. What is the simplified expression?",
                answer: "10y + 2"
            },
            {
                question: "Simplify 5a + 6 + 2a. What is the simplified expression?",
                answer: "7a + 6"
            },
            {
                question: "Simplify 9m + 3 + m. What is the simplified expression?",
                answer: "10m + 3"
            },
            {
                question: "Simplify 4p + 7 + 5p. What is the simplified expression?",
                answer: "9p + 7"
            },

            {
                question: "Simplify 8x - 3x. What is the coefficient of x?",
                answer: 5
            },
            {
                question: "Simplify 10x - 4x. What is the coefficient of x?",
                answer: 6
            },
            {
                question: "Simplify 9y - 2y. What is the coefficient of y?",
                answer: 7
            },
            {
                question: "Simplify 12a - 5a. What is the coefficient of a?",
                answer: 7
            },
            {
                question: "Simplify 15m - 6m. What is the coefficient of m?",
                answer: 9
            },
            {
                question: "Simplify 11x - 3x + 2. What is the simplified expression?",
                answer: "8x + 2"
            },
            {
                question: "Simplify 14y - 5y + 3. What is the simplified expression?",
                answer: "9y + 3"
            },
            {
                question: "Simplify 13a - 4a + 6. What is the simplified expression?",
                answer: "9a + 6"
            },
            {
                question: "Simplify 16m - 7m + 2. What is the simplified expression?",
                answer: "9m + 2"
            },
            {
                question: "Simplify 20p - 8p + 5. What is the simplified expression?",
                answer: "12p + 5"
            },

            {
                question: "Simplify 3x + 4x - 2. What is the simplified expression?",
                answer: "7x - 2"
            },
            {
                question: "Simplify 8x - 3x - 5. What is the simplified expression?",
                answer: "5x - 5"
            },
            {
                question: "Simplify 6y + 5y - 4. What is the simplified expression?",
                answer: "11y - 4"
            },
            {
                question: "Simplify 10a - 3a - 7. What is the simplified expression?",
                answer: "7a - 7"
            },
            {
                question: "Simplify 12m + 4m - 9. What is the simplified expression?",
                answer: "16m - 9"
            },
            {
                question: "Simplify 15p - 6p - 2. What is the simplified expression?",
                answer: "9p - 2"
            },
            {
                question: "Simplify 7x + 9 - 2x. What is the simplified expression?",
                answer: "5x + 9"
            },
            {
                question: "Simplify 11y - 4 + 3y. What is the simplified expression?",
                answer: "14y - 4"
            },
            {
                question: "Simplify 9a + 6 - 5a. What is the simplified expression?",
                answer: "4a + 6"
            },
            {
                question: "Simplify 18m - 3 + 2m. What is the simplified expression?",
                answer: "20m - 3"
            },

            {
                question: "Simplify 3x + 2y + 4x. What is the simplified expression?",
                answer: "7x + 2y"
            },
            {
                question: "Simplify 5x + 3y + 2x. What is the simplified expression?",
                answer: "7x + 3y"
            },
            {
                question: "Simplify 4a + 6b + 3a. What is the simplified expression?",
                answer: "7a + 6b"
            },
            {
                question: "Simplify 8m + 2n + 5m. What is the simplified expression?",
                answer: "13m + 2n"
            },
            {
                question: "Simplify 6p + 4q + 3p. What is the simplified expression?",
                answer: "9p + 4q"
            },
            {
                question: "Simplify 7x + 5y - 2x. What is the simplified expression?",
                answer: "5x + 5y"
            },
            {
                question: "Simplify 10a - 3b + 4a. What is the simplified expression?",
                answer: "14a - 3b"
            },
            {
                question: "Simplify 12m + 5n - 7m. What is the simplified expression?",
                answer: "5m + 5n"
            },
            {
                question: "Simplify 9p - 4q + 6p. What is the simplified expression?",
                answer: "15p - 4q"
            },
            {
                question: "Simplify 15x - 6y - 5x. What is the simplified expression?",
                answer: "10x - 6y"
            },

            {
                question: "Simplify 4x + 3y + 5x + 2y. What is the simplified expression?",
                answer: "9x + 5y"
            },
            {
                question: "Simplify 6a + 2b + 3a + 5b. What is the simplified expression?",
                answer: "9a + 7b"
            },
            {
                question: "Simplify 7m + 4n + 2m + 3n. What is the simplified expression?",
                answer: "9m + 7n"
            },
            {
                question: "Simplify 5p + 6q + 4p - 2q. What is the simplified expression?",
                answer: "9p + 4q"
            },
            {
                question: "Simplify 8x - 3y + 2x + 5y. What is the simplified expression?",
                answer: "10x + 2y"
            },
            {
                question: "Simplify 10a + 4b - 3a + 2b. What is the simplified expression?",
                answer: "7a + 6b"
            },
            {
                question: "Simplify 12m - 5n - 4m + 2n. What is the simplified expression?",
                answer: "8m - 3n"
            },
            {
                question: "Simplify 15p + 3q - 7p - q. What is the simplified expression?",
                answer: "8p + 2q"
            },
            {
                question: "Simplify 9x - 4y + 6x - 3y. What is the simplified expression?",
                answer: "15x - 7y"
            },
            {
                question: "Simplify 14a + 5b - 6a - 2b. What is the simplified expression?",
                answer: "8a + 3b"
            },

            {
                question: "Simplify 3x + 4 + 5x - 2. What is the simplified expression?",
                answer: "8x + 2"
            },
            {
                question: "Simplify 7y - 3 + 2y + 8. What is the simplified expression?",
                answer: "9y + 5"
            },
            {
                question: "Simplify 5a + 6 - 2a + 4. What is the simplified expression?",
                answer: "3a + 10"
            },
            {
                question: "Simplify 9m - 7 + 4m + 2. What is the simplified expression?",
                answer: "13m - 5"
            },
            {
                question: "Simplify 12p + 5 - 7p - 3. What is the simplified expression?",
                answer: "5p + 2"
            },
            {
                question: "Simplify 8x + 3y + 4 - 2x + 5y - 1. What is the simplified expression?",
                answer: "6x + 8y + 3"
            },
            {
                question: "Simplify 10a - 2b + 7 - 3a + 5b + 2. What is the simplified expression?",
                answer: "7a + 3b + 9"
            },
            {
                question: "Simplify 6m + 4n - 5 + 3m - 2n + 8. What is the simplified expression?",
                answer: "9m + 2n + 3"
            },
            {
                question: "Simplify 15p - 4q + 6 - 8p + 2q - 3. What is the simplified expression?",
                answer: "7p - 2q + 3"
            },
            {
                question: "Simplify 11x + 5y - 7 + 4x - 2y + 3. What is the simplified expression?",
                answer: "15x + 3y - 4"
            },

            {
                question: "Simplify 3x + 2x + 4y + y. What is the simplified expression?",
                answer: "5x + 5y"
            },
            {
                question: "Simplify 6a + 3a + 2b + 5b. What is the simplified expression?",
                answer: "9a + 7b"
            },
            {
                question: "Simplify 10m - 4m + 3n - n. What is the simplified expression?",
                answer: "6m + 2n"
            },
            {
                question: "Simplify 12p - 5p + 4q - 2q. What is the simplified expression?",
                answer: "7p + 2q"
            },
            {
                question: "Simplify 15x - 6x + 3y - 5y. What is the simplified expression?",
                answer: "9x - 2y"
            },

            {
                question: "Simplify 4x + 3y + 2x - y + 5. What is the simplified expression?",
                answer: "6x + 2y + 5"
            },
            {
                question: "Simplify 7a - 2b + 3a + 5b - 4. What is the simplified expression?",
                answer: "10a + 3b - 4"
            },
            {
                question: "Simplify 9m + 4n - 3m - 2n + 7. What is the simplified expression?",
                answer: "6m + 2n + 7"
            },
            {
                question: "Simplify 12p - 5q + 4p + 2q - 6. What is the simplified expression?",
                answer: "16p - 3q - 6"
            },
            {
                question: "Simplify 15x + 6y - 8x - 3y + 4. What is the simplified expression?",
                answer: "7x + 3y + 4"
            },

            {
                question: "Simplify 3x² + 5x². What is the coefficient of x²?",
                answer: 8
            },
            {
                question: "Simplify 7x² - 2x². What is the coefficient of x²?",
                answer: 5
            },
            {
                question: "Simplify 4x² + 3x + 2x². What is the simplified expression?",
                answer: "6x² + 3x"
            },
            {
                question: "Simplify 5x² + 4x + 2x² + 3x. What is the simplified expression?",
                answer: "7x² + 7x"
            },
            {
                question: "Simplify 8x² - 3x² + 4x. What is the simplified expression?",
                answer: "5x² + 4x"
            },

            {
                question: "Simplify 3x² + 4x + 5x² - 2x + 6. What is the simplified expression?",
                answer: "8x² + 2x + 6"
            },
            {
                question: "Simplify 7x² - 3x + 2x² + 5x - 4. What is the simplified expression?",
                answer: "9x² + 2x - 4"
            },
            {
                question: "Simplify 10x² + 6x - 4x² - 2x + 3. What is the simplified expression?",
                answer: "6x² + 4x + 3"
            },
            {
                question: "Simplify 12x² - 5x + 3x² + 2x - 7. What is the simplified expression?",
                answer: "15x² - 3x - 7"
            },
            {
                question: "Simplify 15x² + 4x - 6x² - 7x + 5. What is the simplified expression?",
                answer: "9x² - 3x + 5"
            },

            {
                question: "Simplify 4x² + 3x + 2y + 5x² - x + 4y. What is the simplified expression?",
                answer: "9x² + 2x + 6y"
            },
            {
                question: "Simplify 6a² + 4a + 3b + 2a² + 5a + b. What is the simplified expression?",
                answer: "8a² + 9a + 4b"
            },
            {
                question: "Simplify 8m² - 3m + 2n + 4m² + 5m - n. What is the simplified expression?",
                answer: "12m² + 2m + n"
            },
            {
                question: "Simplify 10p² + 6p - 4q + 3p² - 2p + 2q. What is the simplified expression?",
                answer: "13p² + 4p - 2q"
            },
            {
                question: "Simplify 12x² - 5x + 3y + 4x² + 2x - y. What is the simplified expression?",
                answer: "16x² - 3x + 2y"
            },

            {
                question: "Simplify 3x² + 4x + 2 + 5x² - x + 7. What is the simplified expression?",
                answer: "8x² + 3x + 9"
            },
            {
                question: "Simplify 7x² - 3x + 5 + 2x² + 6x - 8. What is the simplified expression?",
                answer: "9x² + 3x - 3"
            },
            {
                question: "Simplify 10x² + 5x - 4 + 3x² - 2x + 9. What is the simplified expression?",
                answer: "13x² + 3x + 5"
            },
            {
                question: "Simplify 14x² - 7x + 6 - 5x² + 3x - 2. What is the simplified expression?",
                answer: "9x² - 4x + 4"
            },
            {
                question: "Simplify 18x² + 4x - 9 - 7x² - 6x + 5. What is the simplified expression?",
                answer: "11x² - 2x - 4"
            },

            {
                question: "Simplify 4x² + 3x + 2y + 5x² - x + 4y - 6. What is the simplified expression?",
                answer: "9x² + 2x + 6y - 6"
            },
            {
                question: "Simplify 7a² - 2a + 3b + 4a² + 5a - b + 8. What is the simplified expression?",
                answer: "11a² + 3a + 2b + 8"
            },
            {
                question: "Simplify 9m² + 4m - 2n + 3m² - 7m + 5n - 4. What is the simplified expression?",
                answer: "12m² - 3m + 3n - 4"
            },
            {
                question: "Simplify 12p² - 5p + 4q + 6p² + 2p - 7q + 3. What is the simplified expression?",
                answer: "18p² - 3p - 3q + 3"
            },
            {
                question: "Simplify 15x² + 6x - 3y + 4 - 8x² - 2x + 5y - 9. What is the simplified expression?",
                answer: "7x² + 4x + 2y - 5"
            },

            {
                question: "Simplify 3x + 2(4x). What is the coefficient of x?",
                answer: 11
            },
            {
                question: "Simplify 5x + 3(2x). What is the coefficient of x?",
                answer: 11
            },
            {
                question: "Simplify 4(x + 2) + 3x. What is the simplified expression?",
                answer: "7x + 8"
            },
            {
                question: "Simplify 3(x + 4) + 2x. What is the simplified expression?",
                answer: "5x + 12"
            },
            {
                question: "Simplify 2(3x + 4) + x. What is the simplified expression?",
                answer: "7x + 8"
            }
        ]
    },


    {
        id: 5,
        title: "Constants and Coefficients",
        description: "Understand constants and coefficients in algebra.",

        content: `
            <h3>Constant</h3>

            <p>
                A constant is a number whose value does not change.
            </p>

            <p>
                In <strong>5x + 7</strong>, 7 is the constant.
            </p>

            <h3>Coefficient</h3>

            <p>
                A coefficient is the number multiplying a variable.
            </p>

            <p>
                In <strong>5x</strong>, 5 is the coefficient of x.
            </p>

            <h3>Example</h3>

            <p>
                In the expression <strong>8y + 12</strong>:
            </p>

            <p>
                Coefficient = <strong>8</strong>
            </p>

            <p>
                Constant = <strong>12</strong>
            </p>
        `,

        practice: [
            {
                question: "What is the coefficient of x in 7x + 3?",
                answer: 7
            },
            {
                question: "What is the coefficient of y in 9y + 4?",
                answer: 9
            },
            {
                question: "What is the constant in 5x + 8?",
                answer: 8
            },
            {
                question: "What is the coefficient of a in 6a + 2?",
                answer: 6
            },
            {
                question: "What is the constant in 3b + 10?",
                answer: 10
            }
        ]
    },


    {
        id: 6,
        title: "The Distributive Property",
        description: "Learn how to remove brackets using multiplication.",

        content: `
            <h3>Distributive Property</h3>

            <p>
                The distributive property allows us to multiply a number
                by every term inside a bracket.
            </p>

            <p>
                For example:
            </p>

            <p>
                3(x + 2)
            </p>

            <p>
                Multiply 3 by both terms:
            </p>

            <p>
                3 × x + 3 × 2
            </p>

            <p>
                Therefore:
                <strong>3x + 6</strong>
            </p>
        `,

        practice: [
            {
                question: "Expand 2(x + 3). What is the constant term?",
                answer: 6
            },
            {
                question: "Expand 4(x + 2). What is the constant term?",
                answer: 8
            },
            {
                question: "Expand 5(x + 1). What is the constant term?",
                answer: 5
            },
            {
                question: "Expand 3(y + 4). What is the constant term?",
                answer: 12
            },
            {
                question: "Expand 6(a + 2). What is the constant term?",
                answer: 12
            }
        ]
    },


    {
        id: 7,
        title: "Substitution in Algebra",
        description: "Learn how to substitute values into algebraic expressions.",

        content: `
            <h3>What is Substitution?</h3>

            <p>
                Substitution means replacing a variable with a known value.
            </p>

            <h3>Example 1:</h3>

            <p>
                Find 2x + 3 when x = 4.
            </p>

            <p>
                Replace x with 4:
            </p>

            <p>
                2(4) + 3 = 8 + 3 = <strong>11</strong>
            </p>

            <h3>Example 2 :</h3>

            <p>
                Find 2x + 10 when x = 4.
            </p>

            <p>
                Replace x with 4:
            </p>

            <p>
                2(4) + 10 = 8 + 10 = <strong>18</strong>
            </p>


            <h3>Example 3 :</h3>

            <p>
                Find 3m + 1 when m = -1.
            </p>

            <p>
                Replace m with -1:
            </p>

            <p>
                3(-1) + 1 = -3 + 1 = <strong>-2</strong>
            </p>


            <h3>Example 4 :</h3>

            <p>
                solve 2y + 1 when y = 7.
            </p>

            <p>
                Replace y with 7:
            </p>

            <p>
                2(7) + 1 = 14 + 1 = <strong>15</strong>
            </p>

            <h3>Example 5:</h3>

            <p>
                Evaluate 5t - 6 when t = 3.
            </p>

            <p>
                Replace t with 3:
            </p>

            <p>
                5(3) - 6 = 15 + 6 = <strong>9</strong>
            </p>
        `,

        practice: [
            {
                question: "Find 2x - 3 when x = 4.",
                answer: 5
            },
            {
                question: "Find 3x + 2 when x = 5.",
                answer: 17
            },
            {
                question: "Find 4y + 1 when y = 3.",
                answer: 13
            },
            {
                question: "Find 5a - 2 when a = 4.",
                answer: 18
            },
            {
                question: "Find 2b + 6 when b = 7.",
                answer: 20
            }
        ]
    },


    {
        id: 8,
        title: "Algebraic Fractions",
        description: "Learn the basic idea of fractions containing variables.",

        content: `
            <h3>Algebraic Fractions</h3>

            <p>
                An algebraic fraction is a fraction that contains one or
                more variables.
            </p>

            <p>
                Examples include:
                <strong>x/2</strong>,
                <strong>3/y</strong> and
                <strong>(x + 1)/4</strong>.
            </p>

            <h3>Example</h3>

            <p>
                If x = 8, find x/2.
            </p>

            <p>
                x/2 = 8/2 = <strong>4</strong>
            </p>
        `,

        practice: [
            {
                question: "If x = 10, what is x/2?",
                answer: 5
            },
            {
                question: "If x = 12, what is x/3?",
                answer: 4
            },
            {
                question: "If y = 20, what is y/4?",
                answer: 5
            },
            {
                question: "If a = 15, what is a/5?",
                answer: 3
            },
            {
                question: "If b = 18, what is b/6?",
                answer: 3
            }
        ]
    },


    {
        id: 9,
        title: "Algebraic Equations",
        description: "Understand equations and the meaning of equality.",

        content: `
            <h3>What is an Equation?</h3>

            <p>
                An equation is a mathematical statement showing that two
                expressions are equal.
            </p>

            <p>
                The equal sign <strong>=</strong> is used in an equation.
            </p>

            <h3>Example</h3>

            <p>
                x + 5 = 12
            </p>

            <p>
                To find x, subtract 5 from both sides:
            </p>

            <p>
                x = 12 - 5
            </p>

            <p>
                Therefore:
                <strong>x = 7</strong>
            </p>
        `,

        practice: [
            {
                question: "Solve: x + 5 = 12.",
                answer: 7
            },
            {
                question: "Solve: x + 3 = 10.",
                answer: 7
            },
            {
                question: "Solve: x - 4 = 8.",
                answer: 12
            },
            {
                question: "Solve: x + 6 = 15.",
                answer: 9
            },
            {
                question: "Solve: x - 5 = 11.",
                answer: 16
            }
        ]
    },


    {
        id: 10,
        title: "Solving Simple Linear Equations",
        description: "Learn how to solve basic equations involving one variable.",

        content: `
            <h3>Linear Equations</h3>

            <p>
                A linear equation is an equation in which the highest power
                of the variable is 1.
            </p>

            <p>
                Example:
                <strong>2x + 3 = 11</strong>
            </p>

            <h3>Step 1</h3>

            <p>
                Subtract 3 from both sides:
            </p>

            <p>
                2x = 8
            </p>

            <h3>Step 2</h3>

            <p>
                Divide both sides by 2:
            </p>

            <p>
                x = <strong>4</strong>
            </p>

            
        `,

        practice: [
            {
                question: "Solve: 2x + 3 = 11.",
                answer: 4
            },
            {
                question: "Solve: 3x + 2 = 11.",
                answer: 3
            },
            {
                question: "Solve: 4x + 4 = 20.",
                answer: 4
            },
            {
                question: "Solve: 5x - 5 = 20.",
                answer: 5
            },
            {
                question: "Solve: 2x - 6 = 10.",
                answer: 8
            }
        ]
    },

    {
        id: 11,
        title: "Collecting Like Terms",
        description: "Learn how to combine like terms to simplify expressions.",

        content: `
            <h3>Collecting Like Terms</h3>

            <p>
                Collecting like terms means combining terms that contain
                the same variable with the same power.
            </p>

            <p>
                For example:
                <strong>4x + 3x = 7x</strong>
            </p>

            <p>
                We add the coefficients while keeping the variable.
            </p>

            <h3>Example</h3>

            <p>
                Simplify:
                <strong>6x + 2x - 3x</strong>
            </p>

            <p>
                6x + 2x - 3x = <strong>5x</strong>
            </p>
        `,

        practice: [
            {
                question: "Simplify 4x + 3x. What is the coefficient of x?",
                answer: 7
            },
            {
                question: "Simplify 8x - 5x. What is the coefficient of x?",
                answer: 3
            },
            {
                question: "Simplify 6y + 4y. What is the coefficient of y?",
                answer: 10
            },
            {
                question: "Simplify 9a - 2a. What is the coefficient of a?",
                answer: 7
            },
            {
                question: "Simplify 10b + 5b - 3b. What is the coefficient of b?",
                answer: 12
            }
        ]
    },


    {
        id: 12,
        title: "Simplifying Expressions with Constants",
        description: "Learn how to combine variable terms and constants.",

        content: `
            <h3>Combining Terms</h3>

            <p>
                When simplifying an expression, combine like variable terms
                and combine constants separately.
            </p>

            <h3>Example</h3>

            <p>
                Simplify:
                <strong>3x + 5 + 2x + 4</strong>
            </p>

            <p>
                Combine the x terms:
                <strong>3x + 2x = 5x</strong>
            </p>

            <p>
                Combine the constants:
                <strong>5 + 4 = 9</strong>
            </p>

            <p>
                Therefore:
                <strong>5x + 9</strong>
            </p>
        `,

        practice: [
            {
                question: "Simplify 3x + 5 + 2x + 4. What is the constant?",
                answer: 9
            },
            {
                question: "Simplify 4x + 3 + x + 2. What is the coefficient of x?",
                answer: 5
            },
            {
                question: "Simplify 5y + 6 + 2y + 4. What is the constant?",
                answer: 10
            },
            {
                question: "Simplify 7a + 2 + 3a + 5. What is the coefficient of a?",
                answer: 10
            },
            {
                question: "Simplify 2b + 8 + 4b + 2. What is the constant?",
                answer: 10
            }
        ]
    },


    {
        id: 13,
        title: "Removing Brackets",
        description: "Learn how to remove brackets using the distributive property.",

        content: `
            <h3>Removing Brackets</h3>

            <p>
                To remove brackets, multiply the number outside the bracket
                by every term inside the bracket.
            </p>

            <h3>Example</h3>

            <p>
                Expand:
                <strong>3(x + 4)</strong>
            </p>

            <p>
                Multiply 3 by x:
                <strong>3x</strong>
            </p>

            <p>
                Multiply 3 by 4:
                <strong>12</strong>
            </p>

            <p>
                Therefore:
                <strong>3x + 12</strong>
            </p>
        `,

        practice: [
            {
                question: "Expand 2(x + 5). What is the constant term?",
                answer: 10
            },
            {
                question: "Expand 3(x + 4). What is the constant term?",
                answer: 12
            },
            {
                question: "Expand 5(x + 2). What is the constant term?",
                answer: 10
            },
            {
                question: "Expand 4(y + 3). What is the constant term?",
                answer: 12
            },
            {
                question: "Expand 6(a + 2). What is the constant term?",
                answer: 12
            }
        ]
    },


    {
        id: 14,
        title: "Expanding Brackets with Negative Numbers",
        description: "Learn how to expand brackets when negative signs are involved.",

        content: `
            <h3>Negative Signs and Brackets</h3>

            <p>
                When a negative number is outside a bracket, it must be
                multiplied by every term inside the bracket.
            </p>

            <h3>Example</h3>

            <p>
                Expand:
                <strong>-2(x + 3)</strong>
            </p>

            <p>
                -2 × x = -2x
            </p>

            <p>
                -2 × 3 = -6
            </p>

            <p>
                Therefore:
                <strong>-2x - 6</strong>
            </p>
        `,

        practice: [
            {
                question: "Expand -2(x + 3). What is the constant term?",
                answer: -6
            },
            {
                question: "Expand -3(x + 2). What is the constant term?",
                answer: -6
            },
            {
                question: "Expand -4(y + 5). What is the constant term?",
                answer: -20
            },
            {
                question: "Expand -5(a + 2). What is the constant term?",
                answer: -10
            },
            {
                question: "Expand -6(b + 3). What is the constant term?",
                answer: -18
            }
        ]
    },


    {
        id: 15,
        title: "Multiplying Algebraic Terms",
        description: "Learn how to multiply numbers and variables in algebra.",

        content: `
            <h3>Multiplication in Algebra</h3>

            <p>
                When multiplying algebraic terms, multiply the numerical
                coefficients and then deal with the variables.
            </p>

            <h3>Example</h3>

            <p>
                3x × 2 = <strong>6x</strong>
            </p>

            <p>
                Another example:
                <strong>4x × 3 = 12x</strong>
            </p>

            <h3>Multiplying Variables</h3>

            <p>
                When multiplying the same variable, the indices are added.
            </p>

            <p>
                x × x = <strong>x²</strong>
            </p>
        `,

        practice: [
            {
                question: "Calculate 3x × 2. What is the coefficient of x?",
                answer: 6
            },
            {
                question: "Calculate 4x × 3. What is the coefficient of x?",
                answer: 12
            },
            {
                question: "Calculate 5y × 2. What is the coefficient of y?",
                answer: 10
            },
            {
                question: "Calculate 6a × 4. What is the coefficient of a?",
                answer: 24
            },
            {
                question: "Calculate 7b × 3. What is the coefficient of b?",
                answer: 21
            }
        ]
    },


    {
        id: 16,
        title: "Laws of Indices",
        description: "Learn the basic laws used when working with powers.",

        content: `
            <h3>What are Indices?</h3>

            <p>
                An index tells us how many times a number or variable is
                multiplied by itself.
            </p>

            <p>
                For example:
                <strong>x³ = x × x × x</strong>
            </p>

            <h3>Multiplication Law</h3>

            <p>
                When multiplying powers with the same base, add the indices.
            </p>

            <p>
                x² × x³ = <strong>x⁵</strong>
            </p>

            <h3>Example</h3>

            <p>
                2² × 2³ = 2⁵ = <strong>32</strong>
            </p>
        `,

        practice: [
            {
                question: "Calculate 2³.",
                answer: 8
            },
            {
                question: "Calculate 3².",
                answer: 9
            },
            {
                question: "Calculate 2⁴.",
                answer: 16
            },
            {
                question: "Calculate 5².",
                answer: 25
            },
            {
                question: "Calculate 10².",
                answer: 100
            }
        ]
    },


    {
        id: 17,
        title: "Division of Algebraic Terms",
        description: "Learn how to divide algebraic terms.",

        content: `
            <h3>Dividing Algebraic Terms</h3>

            <p>
                When dividing algebraic terms, divide the coefficients.
            </p>

            <h3>Example</h3>

            <p>
                12x ÷ 3 = <strong>4x</strong>
            </p>

            <p>
                Another example:
                20y ÷ 5 = <strong>4y</strong>
            </p>

            <h3>Using Indices</h3>

            <p>
                When dividing powers with the same base, subtract the indices.
            </p>

            <p>
                x⁵ ÷ x² = <strong>x³</strong>
            </p>
        `,

        practice: [
            {
                question: "Calculate 12x ÷ 3. What is the coefficient of x?",
                answer: 4
            },
            {
                question: "Calculate 20y ÷ 5. What is the coefficient of y?",
                answer: 4
            },
            {
                question: "Calculate 18a ÷ 3. What is the coefficient of a?",
                answer: 6
            },
            {
                question: "Calculate 24b ÷ 6. What is the coefficient of b?",
                answer: 4
            },
            {
                question: "Calculate 35x ÷ 5. What is the coefficient of x?",
                answer: 7
            }
        ]
    },


    {
        id: 18,
        title: "Evaluating Algebraic Expressions",
        description: "Learn how to find the value of an expression by substitution.",

        content: `
            <h3>Evaluating Expressions</h3>

            <p>
                To evaluate an algebraic expression, replace the variables
                with their given values and perform the calculation.
            </p>

            <h3>Example</h3>

            <p>
                Find the value of:
                <strong>3x + 2</strong>
                when x = 4.
            </p>

            <p>
                3(4) + 2
            </p>

            <p>
                = 12 + 2
            </p>

            <p>
                = <strong>14</strong>
            </p>
        `,

        practice: [
            {
                question: "Evaluate 3x + 2 when x = 4.",
                answer: 14
            },
            {
                question: "Evaluate 2x + 5 when x = 6.",
                answer: 17
            },
            {
                question: "Evaluate 4y + 3 when y = 5.",
                answer: 23
            },
            {
                question: "Evaluate 5a - 2 when a = 6.",
                answer: 28
            },
            {
                question: "Evaluate 3b + 4 when b = 7.",
                answer: 25
            }
        ]
    },


    {
        id: 19,
        title: "Order of Operations in Algebra",
        description: "Learn how to correctly perform calculations in algebraic expressions.",

        content: `
            <h3>Order of Operations</h3>

            <p>
                Mathematical operations should be performed in the correct
                order.
            </p>

            <p>
                A common order is:
                <strong>BODMAS</strong>
            </p>

            <p>
                <strong>B</strong> - Brackets
            </p>

            <p>
                <strong>O</strong> - Orders
            </p>

            <p>
                <strong>D</strong> - Division
            </p>

            <p>
                <strong>M</strong> - Multiplication
            </p>

            <p>
                <strong>A</strong> - Addition
            </p>

            <p>
                <strong>S</strong> - Subtraction
            </p>

            <h3>Example</h3>

            <p>
                2 + 3 × 4
            </p>

            <p>
                Multiplication comes first:
                3 × 4 = 12
            </p>

            <p>
                Therefore:
                2 + 12 = <strong>14</strong>
            </p>
        `,

        practice: [
            {
                question: "Calculate 2 + 3 × 4.",
                answer: 14
            },
            {
                question: "Calculate 5 + 2 × 3.",
                answer: 11
            },
            {
                question: "Calculate 4 + 5 × 2.",
                answer: 14
            },
            {
                question: "Calculate 10 - 2 × 3.",
                answer: 4
            },
            {
                question: "Calculate 3 + 4 × 2.",
                answer: 11
            }
        ]
    },


    {
        id: 20,
        title: "Algebraic Expressions Revision",
        description: "Review the main concepts from Algebra Lessons 11–19.",

        content: `
            <h3>Revision</h3>

            <p>
                In this lesson, we review important ideas about algebraic
                expressions and simplification.
            </p>

            <h3>Key Ideas</h3>

            <ul>
                <li>Like terms can be combined.</li>
                <li>Constants are numbers without variables.</li>
                <li>Coefficients multiply variables.</li>
                <li>Brackets can be expanded using the distributive property.</li>
                <li>Indices are used to represent powers.</li>
                <li>BODMAS helps us follow the correct order of operations.</li>
            </ul>

            <h3>Example</h3>

            <p>
                Simplify:
                <strong>3x + 2x + 4</strong>
            </p>

            <p>
                3x + 2x = 5x
            </p>

            <p>
                Therefore:
                <strong>5x + 4</strong>
            </p>
        `,

        practice: [
            {
                question: "Simplify 3x + 4x. What is the coefficient of x?",
                answer: 7
            },
            {
                question: "Evaluate 2x + 3 when x = 5.",
                answer: 13
            },
            {
                question: "Expand 3(x + 2). What is the constant term?",
                answer: 6
            },
            {
                question: "Calculate 2 + 4 × 3.",
                answer: 14
            },
            {
                question: "Calculate 5².",
                answer: 25
            }
        ]
    },

    {
        id: 21,
        title: "Solving Linear Equations",
        description: "Learn the basic method for solving linear equations.",

        content: `
            <h3>Linear Equations</h3>

            <p>
                A linear equation contains a variable whose highest power is 1.
            </p>

            <p>
                Example:
                <strong>2x + 4 = 10</strong>
            </p>

            <p>
                Subtract 4 from both sides:
                <strong>2x = 6</strong>
            </p>

            <p>
                Divide by 2:
                <strong>x = 3</strong>
            </p>
        `,

        practice: [
            { question: "Solve: x + 7 = 12.", answer: 5 },
            { question: "Solve: x + 9 = 15.", answer: 6 },
            { question: "Solve: x - 4 = 10.", answer: 14 },
            { question: "Solve: x - 8 = 5.", answer: 13 },
            { question: "Solve: x + 6 = 20.", answer: 14 }
        ]
    },


    {
        id: 22,
        title: "Equations with Addition",
        description: "Solve equations where a number is added to the variable.",

        content: `
            <h3>Solving Equations with Addition</h3>

            <p>
                To solve an equation such as
                <strong>x + 8 = 15</strong>,
                subtract 8 from both sides.
            </p>

            <p>
                x = 15 - 8
            </p>

            <p>
                Therefore:
                <strong>x = 7</strong>
            </p>
        `,

        practice: [
            { question: "Solve: x + 8 = 15.", answer: 7 },
            { question: "Solve: x + 5 = 13.", answer: 8 },
            { question: "Solve: x + 11 = 20.", answer: 9 },
            { question: "Solve: x + 4 = 17.", answer: 13 },
            { question: "Solve: x + 12 = 25.", answer: 13 }
        ]
    },


    {
        id: 23,
        title: "Equations with Subtraction",
        description: "Learn how to solve equations involving subtraction.",

        content: `
            <h3>Solving Equations with Subtraction</h3>

            <p>
                Consider:
                <strong>x - 6 = 10</strong>
            </p>

            <p>
                Add 6 to both sides:
                <strong>x = 16</strong>
            </p>

            <p>
                The operation used with x is reversed to isolate the variable.
            </p>
        `,

        practice: [
            { question: "Solve: x - 6 = 10.", answer: 16 },
            { question: "Solve: x - 7 = 12.", answer: 19 },
            { question: "Solve: x - 5 = 15.", answer: 20 },
            { question: "Solve: x - 9 = 11.", answer: 20 },
            { question: "Solve: x - 4 = 18.", answer: 22 }
        ]
    },


    {
        id: 24,
        title: "Equations with Multiplication",
        description: "Solve equations where the variable is multiplied by a number.",

        content: `
            <h3>Multiplication Equations</h3>

            <p>
                If a variable is multiplied by a number, divide both sides
                by that number.
            </p>

            <p>
                Example:
                <strong>3x = 15</strong>
            </p>

            <p>
                Divide both sides by 3:
                <strong>x = 5</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 2x = 10.", answer: 5 },
            { question: "Solve: 3x = 18.", answer: 6 },
            { question: "Solve: 4x = 20.", answer: 5 },
            { question: "Solve: 5x = 35.", answer: 7 },
            { question: "Solve: 6x = 42.", answer: 7 }
        ]
    },


    {
        id: 25,
        title: "Equations with Division",
        description: "Learn how to solve equations involving division.",

        content: `
            <h3>Division Equations</h3>

            <p>
                If a variable is divided by a number, multiply both sides
                by that number.
            </p>

            <p>
                Example:
                <strong>x / 4 = 5</strong>
            </p>

            <p>
                Multiply both sides by 4:
                <strong>x = 20</strong>
            </p>
        `,

        practice: [
            { question: "Solve: x / 2 = 5.", answer: 10 },
            { question: "Solve: x / 3 = 4.", answer: 12 },
            { question: "Solve: x / 5 = 6.", answer: 30 },
            { question: "Solve: x / 4 = 7.", answer: 28 },
            { question: "Solve: x / 6 = 8.", answer: 48 }
        ]
    },


    {
        id: 26,
        title: "Two-Step Equations",
        description: "Learn how to solve equations requiring two operations.",

        content: `
            <h3>Two-Step Equations</h3>

            <p>
                A two-step equation requires two operations to isolate the
                variable.
            </p>

            <p>
                Example:
                <strong>2x + 4 = 12</strong>
            </p>

            <p>
                Subtract 4:
                <strong>2x = 8</strong>
            </p>

            <p>
                Divide by 2:
                <strong>x = 4</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 2x + 4 = 12.", answer: 4 },
            { question: "Solve: 3x + 3 = 15.", answer: 4 },
            { question: "Solve: 4x + 4 = 20.", answer: 4 },
            { question: "Solve: 5x + 5 = 30.", answer: 5 },
            { question: "Solve: 2x + 6 = 16.", answer: 5 }
        ]
    },


    {
        id: 27,
        title: "Two-Step Equations with Subtraction",
        description: "Solve equations involving multiplication and subtraction.",

        content: `
            <h3>Example</h3>

            <p>
                Solve:
                <strong>3x - 6 = 12</strong>
            </p>

            <p>
                Add 6 to both sides:
                <strong>3x = 18</strong>
            </p>

            <p>
                Divide by 3:
                <strong>x = 6</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 2x - 4 = 10.", answer: 7 },
            { question: "Solve: 3x - 6 = 12.", answer: 6 },
            { question: "Solve: 4x - 8 = 16.", answer: 6 },
            { question: "Solve: 5x - 5 = 20.", answer: 5 },
            { question: "Solve: 6x - 12 = 24.", answer: 6 }
        ]
    },


    {
        id: 28,
        title: "Equations with Brackets",
        description: "Learn how to expand brackets before solving equations.",

        content: `
            <h3>Equations with Brackets</h3>

            <p>
                First expand the bracket using the distributive property.
            </p>

            <p>
                Example:
                <strong>2(x + 3) = 14</strong>
            </p>

            <p>
                Expand:
                <strong>2x + 6 = 14</strong>
            </p>

            <p>
                Subtract 6:
                <strong>2x = 8</strong>
            </p>

            <p>
                Therefore:
                <strong>x = 4</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 2(x + 3) = 14.", answer: 4 },
            { question: "Solve: 3(x + 2) = 15.", answer: 3 },
            { question: "Solve: 4(x + 1) = 20.", answer: 4 },
            { question: "Solve: 5(x + 2) = 25.", answer: 3 },
            { question: "Solve: 2(x + 5) = 18.", answer: 4 }
        ]
    },


    {
        id: 29,
        title: "Equations with Variables on Both Sides",
        description: "Learn how to solve equations containing variables on both sides.",

        content: `
            <h3>Variables on Both Sides</h3>

            <p>
                When variables appear on both sides, collect the variable
                terms on one side and constants on the other.
            </p>

            <p>
                Example:
                <strong>3x + 2 = x + 10</strong>
            </p>

            <p>
                Subtract x:
                <strong>2x + 2 = 10</strong>
            </p>

            <p>
                Subtract 2:
                <strong>2x = 8</strong>
            </p>

            <p>
                Therefore:
                <strong>x = 4</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 3x + 2 = x + 10.", answer: 4 },
            { question: "Solve: 4x + 2 = 2x + 10.", answer: 4 },
            { question: "Solve: 5x + 5 = 3x + 15.", answer: 5 },
            { question: "Solve: 6x + 2 = 4x + 12.", answer: 5 },
            { question: "Solve: 7x + 3 = 5x + 13.", answer: 5 }
        ]
    },


    {
        id: 30,
        title: "Linear Equations Revision",
        description: "Review the major methods used to solve linear equations.",

        content: `
            <h3>Linear Equations Revision</h3>

            <p>
                Linear equations can be solved by using inverse operations.
            </p>

            <ul>
                <li>Addition is reversed by subtraction.</li>
                <li>Subtraction is reversed by addition.</li>
                <li>Multiplication is reversed by division.</li>
                <li>Division is reversed by multiplication.</li>
            </ul>

            <h3>Example</h3>

            <p>
                Solve:
                <strong>2x + 6 = 16</strong>
            </p>

            <p>
                2x = 10
            </p>

            <p>
                x = <strong>5</strong>
            </p>
        `,

        practice: [
            { question: "Solve: 2x + 6 = 16.", answer: 5 },
            { question: "Solve: 3x - 3 = 12.", answer: 5 },
            { question: "Solve: 4x + 4 = 20.", answer: 4 },
            { question: "Solve: 5x - 10 = 15.", answer: 5 },
            { question: "Solve: 2(x + 4) = 16.", answer: 4 }
        ]
    },


    {
        id: 31,
        title: "Introduction to Indices",
        description: "Learn what indices are and how they represent repeated multiplication.",

        content: `
            <h3>What are Indices?</h3>

            <p>
                An index shows how many times a number or variable is
                multiplied by itself.
            </p>

            <p>
                For example:
                <strong>2³ = 2 × 2 × 2 = 8</strong>
            </p>

            <p>
                In 2³, 2 is the base and 3 is the index.
            </p>
        `,

        practice: [
            { question: "Calculate 2³.", answer: 8 },
            { question: "Calculate 3².", answer: 9 },
            { question: "Calculate 4².", answer: 16 },
            { question: "Calculate 5².", answer: 25 },
            { question: "Calculate 2⁴.", answer: 16 }
        ]
    },


    {
        id: 32,
        title: "Multiplication Law of Indices",
        description: "Learn how to multiply powers with the same base.",

        content: `
            <h3>Multiplication Law</h3>

            <p>
                When multiplying powers with the same base, add their indices.
            </p>

            <p>
                <strong>aᵐ × aⁿ = aᵐ⁺ⁿ</strong>
            </p>

            <p>
                Example:
                <strong>x² × x³ = x⁵</strong>
            </p>
        `,

        practice: [
            { question: "What is the index in x² × x³?", answer: 5 },
            { question: "What is the index in a³ × a²?", answer: 5 },
            { question: "What is the index in y⁴ × y³?", answer: 7 },
            { question: "What is the index in b⁵ × b²?", answer: 7 },
            { question: "What is the index in p² × p⁶?", answer: 8 }
        ]
    },


    {
        id: 33,
        title: "Division Law of Indices",
        description: "Learn how to divide powers with the same base.",

        content: `
            <h3>Division Law</h3>

            <p>
                When dividing powers with the same base, subtract the
                denominator's index from the numerator's index.
            </p>

            <p>
                <strong>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</strong>
            </p>

            <p>
                Example:
                <strong>x⁵ ÷ x² = x³</strong>
            </p>
        `,

        practice: [
            { question: "What is the index in x⁵ ÷ x²?", answer: 3 },
            { question: "What is the index in a⁷ ÷ a³?", answer: 4 },
            { question: "What is the index in y⁶ ÷ y²?", answer: 4 },
            { question: "What is the index in b⁸ ÷ b³?", answer: 5 },
            { question: "What is the index in p⁹ ÷ p⁴?", answer: 5 }
        ]
    },


    {
        id: 34,
        title: "Power of a Power",
        description: "Learn how to simplify powers raised to another power.",

        content: `
            <h3>Power of a Power</h3>

            <p>
                When a power is raised to another power, multiply the indices.
            </p>

            <p>
                <strong>(aᵐ)ⁿ = aᵐⁿ</strong>
            </p>

            <p>
                Example:
                <strong>(x²)³ = x⁶</strong>
            </p>
        `,

        practice: [
            { question: "What is the index in (x²)³?", answer: 6 },
            { question: "What is the index in (a³)²?", answer: 6 },
            { question: "What is the index in (y⁴)²?", answer: 8 },
            { question: "What is the index in (b²)⁵?", answer: 10 },
            { question: "What is the index in (p³)³?", answer: 9 }
        ]
    },


    {
        id: 35,
        title: "Zero Index",
        description: "Understand what happens when a non-zero number has an index of zero.",

        content: `
            <h3>Zero Index</h3>

            <p>
                Any non-zero number raised to the power of zero is equal to 1.
            </p>

            <p>
                <strong>a⁰ = 1</strong>
            </p>

            <p>
                Examples:
            </p>

            <p>
                5⁰ = <strong>1</strong>
            </p>

            <p>
                x⁰ = <strong>1</strong>, provided x is not zero.
            </p>
        `,

        practice: [
            { question: "Calculate 5⁰.", answer: 1 },
            { question: "Calculate 10⁰.", answer: 1 },
            { question: "Calculate 7⁰.", answer: 1 },
            { question: "Calculate 100⁰.", answer: 1 },
            { question: "Calculate 3⁰.", answer: 1 }
        ]
    },


    {
        id: 36,
        title: "Negative Indices",
        description: "Learn how negative indices represent reciprocals.",

        content: `
            <h3>Negative Indices</h3>

            <p>
                A negative index means that the expression becomes its
                reciprocal.
            </p>

            <p>
                <strong>a⁻ⁿ = 1/aⁿ</strong>
            </p>

            <h3>Example</h3>

            <p>
                2⁻² = 1/2² = <strong>1/4</strong>
            </p>
        `,

        practice: [
            {
                question: "What is the denominator of 2⁻²?",
                answer: 4
            },
            {
                question: "What is the denominator of 3⁻²?",
                answer: 9
            },
            {
                question: "What is the denominator of 2⁻³?",
                answer: 8
            },
            {
                question: "What is the denominator of 5⁻²?",
                answer: 25
            },
            {
                question: "What is the denominator of 10⁻²?",
                answer: 100
            }
        ]
    },


    {
        id: 37,
        title: "Fractional Indices",
        description: "Learn the basic meaning of fractional powers.",

        content: `
            <h3>Fractional Indices</h3>

            <p>
                A fractional index can represent a root.
            </p>

            <p>
                <strong>a¹/² = √a</strong>
            </p>

            <h3>Examples</h3>

            <p>
                4¹/² = √4 = <strong>2</strong>
            </p>

            <p>
                9¹/² = √9 = <strong>3</strong>
            </p>
        `,

        practice: [
            { question: "Calculate √4.", answer: 2 },
            { question: "Calculate √9.", answer: 3 },
            { question: "Calculate √16.", answer: 4 },
            { question: "Calculate √25.", answer: 5 },
            { question: "Calculate √36.", answer: 6 }
        ]
    },


    {
        id: 38,
        title: "Introduction to Surds",
        description: "Understand surds and why some square roots cannot be simplified to whole numbers.",

        content: `
            <h3>What is a Surd?</h3>

            <p>
                A surd is an irrational root that cannot be expressed as
                a simple rational number.
            </p>

            <p>
                Examples include:
                <strong>√2</strong>, <strong>√3</strong> and <strong>√5</strong>.
            </p>

            <p>
                However, √16 is not a surd because:
                <strong>√16 = 4</strong>.
            </p>
        `,

        practice: [
            { question: "Calculate √4.", answer: 2 },
            { question: "Calculate √9.", answer: 3 },
            { question: "Calculate √16.", answer: 4 },
            { question: "Calculate √25.", answer: 5 },
            { question: "Calculate √49.", answer: 7 }
        ]
    },


    {
        id: 39,
        title: "Simplifying Surds",
        description: "Learn how to simplify simple square-root expressions.",

        content: `
            <h3>Simplifying Surds</h3>

            <p>
                To simplify a surd, look for a perfect-square factor.
            </p>

            <h3>Example</h3>

            <p>
                √12 = √(4 × 3)
            </p>

            <p>
                = √4 × √3
            </p>

            <p>
                = <strong>2√3</strong>
            </p>
        `,

        practice: [
            { question: "Simplify √4. Answer as a whole number.", answer: 2 },
            { question: "Simplify √9. Answer as a whole number.", answer: 3 },
            { question: "Simplify √16. Answer as a whole number.", answer: 4 },
            { question: "Simplify √25. Answer as a whole number.", answer: 5 },
            { question: "Simplify √36. Answer as a whole number.", answer: 6 }
        ]
    },


    {
        id: 40,
        title: "Indices and Surds Revision",
        description: "Review the main concepts of indices and surds.",

        content: `
            <h3>Revision</h3>

            <p>
                Important laws of indices include:
            </p>

            <ul>
                <li>aᵐ × aⁿ = aᵐ⁺ⁿ</li>
                <li>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</li>
                <li>(aᵐ)ⁿ = aᵐⁿ</li>
                <li>a⁰ = 1</li>
                <li>a⁻ⁿ = 1/aⁿ</li>
            </ul>

            <p>
                Square roots such as √2 and √3 are examples of surds.
            </p>
        `,

        practice: [
            { question: "Calculate 2³.", answer: 8 },
            { question: "Calculate 3².", answer: 9 },
            { question: "Calculate 5⁰.", answer: 1 },
            { question: "Calculate √25.", answer: 5 },
            { question: "Calculate √36.", answer: 6 }
        ]
    },


    {
        id: 41,
        title: "Introduction to Factorization",
        description: "Learn what factorization means in algebra.",

        content: `
            <h3>What is Factorization?</h3>

            <p>
                Factorization is the process of writing an expression as
                a product of its factors.
            </p>

            <h3>Example</h3>

            <p>
                6x + 12
            </p>

            <p>
                Both terms have a common factor of 6.
            </p>

            <p>
                Therefore:
                <strong>6x + 12 = 6(x + 2)</strong>
            </p>
        `,

        practice: [
            { question: "Factorize 2x + 4. What is the common factor?", answer: 2 },
            { question: "Factorize 3x + 6. What is the common factor?", answer: 3 },
            { question: "Factorize 5x + 10. What is the common factor?", answer: 5 },
            { question: "Factorize 4x + 8. What is the common factor?", answer: 4 },
            { question: "Factorize 6x + 12. What is the common factor?", answer: 6 }
        ]
    },


    {
        id: 42,
        title: "Common Factors",
        description: "Learn how to identify common factors in algebraic terms.",

        content: `
            <h3>Common Factors</h3>

            <p>
                A common factor is a number or expression that divides
                each term exactly.
            </p>

            <p>
                For example, in:
                <strong>8x + 12</strong>
            </p>

            <p>
                4 is a common factor.
            </p>

            <p>
                Therefore:
                <strong>8x + 12 = 4(2x + 3)</strong>
            </p>
        `,

        practice: [
            { question: "What is the greatest common factor of 6 and 9?", answer: 3 },
            { question: "What is the greatest common factor of 8 and 12?", answer: 4 },
            { question: "What is the greatest common factor of 10 and 15?", answer: 5 },
            { question: "What is the greatest common factor of 12 and 18?", answer: 6 },
            { question: "What is the greatest common factor of 15 and 20?", answer: 5 }
        ]
    },


    {
        id: 43,
        title: "Factorizing Simple Expressions",
        description: "Learn how to factorize expressions by taking out the common factor.",

        content: `
            <h3>Factorizing Simple Expressions</h3>

            <p>
                Find the greatest common factor and place it outside brackets.
            </p>

            <p>
                Example:
                <strong>4x + 8</strong>
            </p>

            <p>
                The common factor is 4.
            </p>

            <p>
                Therefore:
                <strong>4(x + 2)</strong>
            </p>
        `,

        practice: [
            { question: "Factorize 2x + 6. What common factor should be outside the bracket?", answer: 2 },
            { question: "Factorize 3x + 9. What common factor should be outside the bracket?", answer: 3 },
            { question: "Factorize 4x + 12. What common factor should be outside the bracket?", answer: 4 },
            { question: "Factorize 5x + 15. What common factor should be outside the bracket?", answer: 5 },
            { question: "Factorize 6x + 18. What common factor should be outside the bracket?", answer: 6 }
        ]
    },


    {
        id: 44,
        title: "Factorization by Grouping",
        description: "Learn how to factorize expressions by grouping terms.",

        content: `
            <h3>Factorization by Grouping</h3>

            <p>
                Grouping involves arranging terms into groups that have
                common factors.
            </p>

            <h3>Example</h3>

            <p>
                ax + ay + bx + by
            </p>

            <p>
                Group:
                <strong>a(x + y) + b(x + y)</strong>
            </p>

            <p>
                Therefore:
                <strong>(a + b)(x + y)</strong>
            </p>
        `,

        practice: [
            {
                question: "In ax + ay, what is the common factor?",
                answer: 1
            },
            {
                question: "In 2x + 2y, what numerical factor is common?",
                answer: 2
            },
            {
                question: "In 3x + 3y, what numerical factor is common?",
                answer: 3
            },
            {
                question: "In 4x + 4y, what numerical factor is common?",
                answer: 4
            },
            {
                question: "In 5x + 5y, what numerical factor is common?",
                answer: 5
            }
        ]
    },


    {
        id: 45,
        title: "Difference of Two Squares",
        description: "Learn the difference of two squares factorization formula.",

        content: `
            <h3>Difference of Two Squares</h3>

            <p>
                The difference of two squares follows the formula:
            </p>

            <p>
                <strong>a² - b² = (a - b)(a + b)</strong>
            </p>

            <h3>Example</h3>

            <p>
                x² - 9
            </p>

            <p>
                Since 9 = 3²:
            </p>

            <p>
                <strong>x² - 3² = (x - 3)(x + 3)</strong>
            </p>
        `,

        practice: [
            { question: "In x² - 16, what is the value of √16?", answer: 4 },
            { question: "In x² - 25, what is the value of √25?", answer: 5 },
            { question: "In x² - 36, what is the value of √36?", answer: 6 },
            { question: "In x² - 49, what is the value of √49?", answer: 7 },
            { question: "In x² - 64, what is the value of √64?", answer: 8 }
        ]
    },


    {
        id: 46,
        title: "Factorizing Quadratic Expressions",
        description: "Learn the basic idea of factorizing quadratic expressions.",

        content: `
            <h3>Quadratic Factorization</h3>

            <p>
                A quadratic expression commonly has the form:
                <strong>x² + bx + c</strong>
            </p>

            <p>
                We look for two numbers whose product is c and whose sum
                is b.
            </p>

            <h3>Example</h3>

            <p>
                x² + 5x + 6
            </p>

            <p>
                The numbers 2 and 3 multiply to 6 and add to 5.
            </p>

            <p>
                Therefore:
                <strong>(x + 2)(x + 3)</strong>
            </p>
        `,

        practice: [
            { question: "For x² + 5x + 6, what is 2 + 3?", answer: 5 },
            { question: "For x² + 7x + 12, what is 3 + 4?", answer: 7 },
            { question: "For x² + 9x + 20, what is 4 + 5?", answer: 9 },
            { question: "For x² + 11x + 30, what is 5 + 6?", answer: 11 },
            { question: "For x² + 13x + 42, what is 6 + 7?", answer: 13 }
        ]
    },


    {
        id: 47,
        title: "Factorizing Quadratics with Positive Terms",
        description: "Practice factorizing simple quadratic expressions.",

        content: `
            <h3>Positive Quadratics</h3>

            <p>
                For expressions of the form:
                <strong>x² + bx + c</strong>,
                find two numbers that multiply to c and add to b.
            </p>

            <h3>Example</h3>

            <p>
                x² + 7x + 12
            </p>

            <p>
                3 × 4 = 12
            </p>

            <p>
                3 + 4 = 7
            </p>

            <p>
                Therefore:
                <strong>(x + 3)(x + 4)</strong>
            </p>
        `,

        practice: [
            { question: "For x² + 6x + 8, what is the sum of 2 and 4?", answer: 6 },
            { question: "For x² + 8x + 15, what is the sum of 3 and 5?", answer: 8 },
            { question: "For x² + 10x + 21, what is the sum of 3 and 7?", answer: 10 },
            { question: "For x² + 12x + 35, what is the sum of 5 and 7?", answer: 12 },
            { question: "For x² + 14x + 48, what is the sum of 6 and 8?", answer: 14 }
        ]
    },


    {
        id: 48,
        title: "Factorizing Quadratics with Negative Terms",
        description: "Learn how negative signs affect quadratic factorization.",

        content: `
            <h3>Negative Terms</h3>

            <p>
                When the constant term is negative, the two factors have
                opposite signs.
            </p>

            <h3>Example</h3>

            <p>
                x² + x - 6
            </p>

            <p>
                We need two numbers whose product is -6 and whose sum is 1.
            </p>

            <p>
                The numbers are 3 and -2.
            </p>

            <p>
                Therefore:
                <strong>(x + 3)(x - 2)</strong>
            </p>
        `,

        practice: [
            { question: "What is 3 + (-2)?", answer: 1 },
            { question: "What is 4 + (-1)?", answer: 3 },
            { question: "What is 5 + (-2)?", answer: 3 },
            { question: "What is 6 + (-3)?", answer: 3 },
            { question: "What is 7 + (-4)?", answer: 3 }
        ]
    },


    {
        id: 49,
        title: "Checking Factorization",
        description: "Learn how to expand factors to check whether factorization is correct.",

        content: `
            <h3>Checking Your Answer</h3>

            <p>
                You can check a factorization by expanding the brackets.
            </p>

            <h3>Example</h3>

            <p>
                Consider:
                <strong>(x + 2)(x + 3)</strong>
            </p>

            <p>
                Expand:
                x² + 3x + 2x + 6
            </p>

            <p>
                = <strong>x² + 5x + 6</strong>
            </p>

            <p>
                Therefore the factorization is correct.
            </p>
        `,

        practice: [
            { question: "Expand (x + 2)(x + 3). What is the constant?", answer: 6 },
            { question: "Expand (x + 3)(x + 4). What is the constant?", answer: 12 },
            { question: "Expand (x + 4)(x + 5). What is the constant?", answer: 20 },
            { question: "Expand (x + 5)(x + 6). What is the constant?", answer: 30 },
            { question: "Expand (x + 6)(x + 7). What is the constant?", answer: 42 }
        ]
    },


    {
        id: 50,
        title: "Factorization Revision",
        description: "Review the main factorization methods learned so far.",

        content: `
            <h3>Factorization Revision</h3>

            <p>
                Factorization involves writing an expression as a product
                of simpler factors.
            </p>

            <h3>Main Methods</h3>

            <ul>
                <li>Taking out common factors.</li>
                <li>Factorization by grouping.</li>
                <li>Difference of two squares.</li>
                <li>Factorizing simple quadratic expressions.</li>
            </ul>

            <h3>Example</h3>

            <p>
                x² + 5x + 6
            </p>

            <p>
                Find two numbers that multiply to 6 and add to 5:
                2 and 3.
            </p>

            <p>
                Therefore:
                <strong>(x + 2)(x + 3)</strong>
            </p>
        `,

        practice: [
            { question: "What is the common factor of 6x + 12?", answer: 6 },
            { question: "What is √25?", answer: 5 },
            { question: "What is 2 + 3?", answer: 5 },
            { question: "What is 3 × 4?", answer: 12 },
            { question: "What is 5 × 6?", answer: 30 }
        ]
    },

    {
        id: 51,
        title: "Introduction to Quadratic Equations",
        description: "Learn what quadratic equations are and how they differ from linear equations.",

        content: `
            <h3>What is a Quadratic Equation?</h3>

            <p>
                A quadratic equation is an equation in which the highest
                power of the variable is 2.
            </p>

            <p>
                The general form is:
                <strong>ax² + bx + c = 0</strong>
            </p>

            <p>
                Example:
                <strong>x² + 5x + 6 = 0</strong>
            </p>

            <p>
                Unlike a linear equation, a quadratic equation contains
                a squared variable.
            </p>
        `,

        practice: [
            { question: "What is the highest power of x in x² + 3x + 2?", answer: 2 },
            { question: "What is the coefficient of x² in 3x² + 2x + 1?", answer: 3 },
            { question: "What is the constant in x² + 4x + 7?", answer: 7 },
            { question: "What is the coefficient of x in x² + 5x + 2?", answer: 5 },
            { question: "What is the highest power in 4x² + 7x - 3?", answer: 2 }
        ]
    },


    {
        id: 52,
        title: "Solving Quadratics by Factorization",
        description: "Learn how to solve simple quadratic equations by factorization.",

        content: `
            <h3>Factorization Method</h3>

            <p>
                One method of solving quadratic equations is to factorize
                the quadratic expression.
            </p>

            <p>
                Example:
                <strong>x² + 5x + 6 = 0</strong>
            </p>

            <p>
                Factorize:
                <strong>(x + 2)(x + 3) = 0</strong>
            </p>

            <p>
                Therefore:
                x = -2 or x = -3.
            </p>
        `,

        practice: [
            { question: "Solve x² + 5x + 6 = 0. What is the larger root?", answer: -2 },
            { question: "Solve x² + 7x + 12 = 0. What is the larger root?", answer: -3 },
            { question: "Solve x² + 9x + 20 = 0. What is the larger root?", answer: -4 },
            { question: "Solve x² + 11x + 30 = 0. What is the larger root?", answer: -5 },
            { question: "Solve x² + 13x + 42 = 0. What is the larger root?", answer: -6 }
        ]
    },


    {
        id: 53,
        title: "Quadratics with Positive Roots",
        description: "Learn how factorized quadratics can produce positive solutions.",

        content: `
            <h3>Positive Roots</h3>

            <p>
                Consider:
                <strong>x² - 5x + 6 = 0</strong>
            </p>

            <p>
                Factorize:
                <strong>(x - 2)(x - 3) = 0</strong>
            </p>

            <p>
                Therefore:
                <strong>x = 2</strong> or <strong>x = 3</strong>.
            </p>
        `,

        practice: [
            { question: "For x² - 5x + 6 = 0, what is the larger root?", answer: 3 },
            { question: "For x² - 7x + 12 = 0, what is the larger root?", answer: 4 },
            { question: "For x² - 9x + 20 = 0, what is the larger root?", answer: 5 },
            { question: "For x² - 11x + 30 = 0, what is the larger root?", answer: 6 },
            { question: "For x² - 13x + 42 = 0, what is the larger root?", answer: 7 }
        ]
    },


    {
        id: 54,
        title: "Quadratic Formula",
        description: "Learn the quadratic formula for solving quadratic equations.",

        content: `
            <h3>The Quadratic Formula</h3>

            <p>
                For an equation:
                <strong>ax² + bx + c = 0</strong>
            </p>

            <p>
                The solutions are given by:
            </p>

            <p>
                <strong>x = (-b ± √(b² - 4ac)) / 2a</strong>
            </p>

            <p>
                The formula can be used when factorization is difficult
                or when we want a general method.
            </p>
        `,

        practice: [
            { question: "In ax² + bx + c = 0, what does a represent?", answer: 1 },
            { question: "In 2x² + 3x + 1 = 0, what is a?", answer: 2 },
            { question: "In 3x² + 5x + 2 = 0, what is a?", answer: 3 },
            { question: "In x² + 7x + 10 = 0, what is b?", answer: 7 },
            { question: "In x² + 4x + 3 = 0, what is c?", answer: 3 }
        ]
    },


    {
        id: 55,
        title: "The Discriminant",
        description: "Learn how the discriminant tells us about the roots of a quadratic.",

        content: `
            <h3>The Discriminant</h3>

            <p>
                The discriminant is:
                <strong>b² - 4ac</strong>
            </p>

            <p>
                It helps determine the nature of the roots.
            </p>

            <ul>
                <li>Positive discriminant: two real roots.</li>
                <li>Zero discriminant: one repeated real root.</li>
                <li>Negative discriminant: no real roots.</li>
            </ul>

            <h3>Example</h3>

            <p>
                For x² - 5x + 6:
            </p>

            <p>
                b² - 4ac = 25 - 24 = <strong>1</strong>
            </p>
        `,

        practice: [
            { question: "Find the discriminant of x² - 5x + 6.", answer: 1 },
            { question: "Find the discriminant of x² - 7x + 12.", answer: 1 },
            { question: "Find the discriminant of x² - 9x + 20.", answer: 1 },
            { question: "Find the discriminant of x² - 6x + 9.", answer: 0 },
            { question: "Find the discriminant of x² - 8x + 16.", answer: 0 }
        ]
    },


    {
        id: 56,
        title: "Completing the Square",
        description: "Learn the basic idea of rewriting a quadratic by completing the square.",

        content: `
            <h3>Completing the Square</h3>

            <p>
                Completing the square is a method of rewriting a quadratic
                expression in square form.
            </p>

            <p>
                For example:
                <strong>x² + 6x + 9 = (x + 3)²</strong>
            </p>

            <p>
                The number 3 is half of 6.
            </p>
        `,

        practice: [
            { question: "Complete x² + 6x + 9. What number is inside the bracket?", answer: 3 },
            { question: "Complete x² + 8x + 16. What number is inside the bracket?", answer: 4 },
            { question: "Complete x² + 10x + 25. What number is inside the bracket?", answer: 5 },
            { question: "Complete x² + 12x + 36. What number is inside the bracket?", answer: 6 },
            { question: "Complete x² + 14x + 49. What number is inside the bracket?", answer: 7 }
        ]
    },


    {
        id: 57,
        title: "Roots of Quadratic Equations",
        description: "Understand the meaning of roots or solutions of a quadratic equation.",

        content: `
            <h3>Roots</h3>

            <p>
                The roots of a quadratic equation are the values of the
                variable that make the equation equal to zero.
            </p>

            <p>
                Example:
                <strong>x² - 5x + 6 = 0</strong>
            </p>

            <p>
                The roots are:
                <strong>x = 2</strong> and <strong>x = 3</strong>.
            </p>
        `,

        practice: [
            { question: "What is the smaller root of x² - 5x + 6 = 0?", answer: 2 },
            { question: "What is the smaller root of x² - 7x + 12 = 0?", answer: 3 },
            { question: "What is the smaller root of x² - 9x + 20 = 0?", answer: 4 },
            { question: "What is the smaller root of x² - 11x + 30 = 0?", answer: 5 },
            { question: "What is the smaller root of x² - 13x + 42 = 0?", answer: 6 }
        ]
    },


    {
        id: 58,
        title: "Sum and Product of Roots",
        description: "Learn the relationship between the roots and coefficients of a quadratic.",

        content: `
            <h3>Roots and Coefficients</h3>

            <p>
                For:
                <strong>ax² + bx + c = 0</strong>
            </p>

            <p>
                Sum of roots = <strong>-b/a</strong>
            </p>

            <p>
                Product of roots = <strong>c/a</strong>
            </p>

            <h3>Example</h3>

            <p>
                For x² - 5x + 6 = 0:
            </p>

            <p>
                Sum = 5
            </p>

            <p>
                Product = 6
            </p>
        `,

        practice: [
            { question: "What is the sum of the roots of x² - 5x + 6 = 0?", answer: 5 },
            { question: "What is the product of the roots of x² - 5x + 6 = 0?", answer: 6 },
            { question: "What is the sum of the roots of x² - 7x + 12 = 0?", answer: 7 },
            { question: "What is the product of the roots of x² - 7x + 12 = 0?", answer: 12 },
            { question: "What is the sum of the roots of x² - 9x + 20 = 0?", answer: 9 }
        ]
    },


    {
        id: 59,
        title: "Quadratic Equations in Word Problems",
        description: "Learn how quadratic equations can represent real-life situations.",

        content: `
            <h3>Quadratics in Real Life</h3>

            <p>
                Quadratic equations can be used to model areas, dimensions,
                motion and other mathematical situations.
            </p>

            <p>
                For example, the area of a rectangle can involve expressions
                such as:
                <strong>x(x + 3)</strong>
            </p>

            <p>
                Expanding gives:
                <strong>x² + 3x</strong>.
            </p>
        `,

        practice: [
            { question: "If a rectangle has length 5 and width 4, what is its area?", answer: 20 },
            { question: "If a rectangle has length 6 and width 3, what is its area?", answer: 18 },
            { question: "If a rectangle has length 8 and width 2, what is its area?", answer: 16 },
            { question: "If a rectangle has length 7 and width 5, what is its area?", answer: 35 },
            { question: "If a rectangle has length 9 and width 4, what is its area?", answer: 36 }
        ]
    },


    {
        id: 60,
        title: "Quadratic Equations Revision",
        description: "Review the major methods and concepts used with quadratic equations.",

        content: `
            <h3>Quadratic Revision</h3>

            <p>
                Quadratic equations have the general form:
                <strong>ax² + bx + c = 0</strong>.
            </p>

            <p>
                They can be solved using factorization, the quadratic formula
                and completing the square.
            </p>

            <p>
                The discriminant is:
                <strong>b² - 4ac</strong>.
            </p>
        `,

        practice: [
            { question: "What is the highest power in a quadratic equation?", answer: 2 },
            { question: "What is the discriminant formula's first term?", answer: b => 0 }
        ]
    },


    {
        id: 61,
        title: "Introduction to Simultaneous Equations",
        description: "Learn what simultaneous equations are.",

        content: `
            <h3>Simultaneous Equations</h3>

            <p>
                Simultaneous equations are two or more equations that are
                solved together to find values that satisfy all equations.
            </p>

            <p>
                Example:
            </p>

            <p>
                x + y = 10
            </p>

            <p>
                x - y = 2
            </p>
        `,

        practice: [
            { question: "If x + y = 10 and x - y = 2, what is x?", answer: 6 },
            { question: "If x + y = 8 and x - y = 2, what is x?", answer: 5 },
            { question: "If x + y = 12 and x - y = 4, what is x?", answer: 8 },
            { question: "If x + y = 14 and x - y = 6, what is x?", answer: 10 },
            { question: "If x + y = 16 and x - y = 8, what is x?", answer: 12 }
        ]
    },


    {
        id: 62,
        title: "Elimination Method",
        description: "Learn how to solve simultaneous equations using elimination.",

        content: `
            <h3>Elimination</h3>

            <p>
                The elimination method removes one variable by adding or
                subtracting the equations.
            </p>

            <p>
                Example:
            </p>

            <p>
                x + y = 10
            </p>

            <p>
                x - y = 2
            </p>

            <p>
                Adding them gives:
                <strong>2x = 12</strong>
            </p>

            <p>
                Therefore:
                <strong>x = 6</strong>
            </p>
        `,

        practice: [
            { question: "Solve x + y = 10 and x - y = 2. Find x.", answer: 6 },
            { question: "Solve x + y = 12 and x - y = 4. Find x.", answer: 8 },
            { question: "Solve x + y = 14 and x - y = 6. Find x.", answer: 10 },
            { question: "Solve x + y = 16 and x - y = 8. Find x.", answer: 12 },
            { question: "Solve x + y = 18 and x - y = 10. Find x.", answer: 14 }
        ]
    },


    {
        id: 63,
        title: "Substitution Method",
        description: "Learn how to solve simultaneous equations using substitution.",

        content: `
            <h3>Substitution</h3>

            <p>
                In substitution, one equation is rearranged to make one
                variable the subject and then substituted into the other.
            </p>

            <p>
                Example:
                <strong>y = x + 2</strong>
            </p>

            <p>
                If x = 5, then:
                <strong>y = 7</strong>.
            </p>
        `,

        practice: [
            { question: "If y = x + 2 and x = 5, find y.", answer: 7 },
            { question: "If y = x + 3 and x = 4, find y.", answer: 7 },
            { question: "If y = x + 5 and x = 6, find y.", answer: 11 },
            { question: "If y = x + 7 and x = 3, find y.", answer: 10 },
            { question: "If y = x + 4 and x = 8, find y.", answer: 12 }
        ]
    },


    {
        id: 64,
        title: "Simultaneous Equations with Addition",
        description: "Solve simultaneous equations where equations can be added directly.",

        content: `
            <h3>Adding Equations</h3>

            <p>
                When one variable has opposite coefficients, adding the
                equations can eliminate that variable.
            </p>

            <p>
                Example:
            </p>

            <p>
                x + y = 10
            </p>

            <p>
                x - y = 4
            </p>

            <p>
                Adding gives:
                <strong>2x = 14</strong>
            </p>

            <p>
                Therefore x = 7.
            </p>
        `,

        practice: [
            { question: "Solve x + y = 10 and x - y = 4. Find x.", answer: 7 },
            { question: "Solve x + y = 12 and x - y = 6. Find x.", answer: 9 },
            { question: "Solve x + y = 14 and x - y = 8. Find x.", answer: 11 },
            { question: "Solve x + y = 16 and x - y = 10. Find x.", answer: 13 },
            { question: "Solve x + y = 18 and x - y = 12. Find x.", answer: 15 }
        ]
    },


    {
        id: 65,
        title: "Simultaneous Equations with Multipliers",
        description: "Learn how to multiply equations before eliminating a variable.",

        content: `
            <h3>Using Multipliers</h3>

            <p>
                Sometimes the coefficients of a variable are not equal.
                We can multiply one or both equations so that elimination
                becomes possible.
            </p>

            <p>
                For example, if one equation contains 2x and another
                contains 3x, multiplying them appropriately can create
                equal coefficients.
            </p>
        `,

        practice: [
            { question: "What is 2 × 3?", answer: 6 },
            { question: "What is 3 × 4?", answer: 12 },
            { question: "What is 4 × 5?", answer: 20 },
            { question: "What is 5 × 6?", answer: 30 },
            { question: "What is 6 × 7?", answer: 42 }
        ]
    },


    {
        id: 66,
        title: "Checking Simultaneous Equation Solutions",
        description: "Learn how to verify solutions to simultaneous equations.",

        content: `
            <h3>Checking Solutions</h3>

            <p>
                After finding values for x and y, substitute them back
                into both original equations.
            </p>

            <p>
                If both equations are satisfied, the solution is correct.
            </p>

            <h3>Example</h3>

            <p>
                x = 6 and y = 4.
            </p>

            <p>
                Check:
                6 + 4 = 10.
            </p>
        `,

        practice: [
            { question: "If x = 6 and y = 4, what is x + y?", answer: 10 },
            { question: "If x = 8 and y = 2, what is x + y?", answer: 10 },
            { question: "If x = 7 and y = 5, what is x + y?", answer: 12 },
            { question: "If x = 9 and y = 3, what is x + y?", answer: 12 },
            { question: "If x = 10 and y = 4, what is x + y?", answer: 14 }
        ]
    },


    {
        id: 67,
        title: "Simultaneous Equations in Word Problems",
        description: "Learn how simultaneous equations can represent real-life problems.",

        content: `
            <h3>Word Problems</h3>

            <p>
                Simultaneous equations can be used when two unknown quantities
                are related by two different conditions.
            </p>

            <p>
                Examples include problems involving ages, prices,
                numbers and quantities.
            </p>
        `,

        practice: [
            { question: "Two numbers have sum 10 and difference 2. What is the larger number?", answer: 6 },
            { question: "Two numbers have sum 12 and difference 4. What is the larger number?", answer: 8 },
            { question: "Two numbers have sum 14 and difference 6. What is the larger number?", answer: 10 },
            { question: "Two numbers have sum 16 and difference 8. What is the larger number?", answer: 12 },
            { question: "Two numbers have sum 18 and difference 10. What is the larger number?", answer: 14 }
        ]
    },


    {
        id: 68,
        title: "Graphical Solution of Simultaneous Equations",
        description: "Understand how graphs can be used to solve simultaneous equations.",

        content: `
            <h3>Graphical Method</h3>

            <p>
                Each linear equation can be represented by a straight line.
            </p>

            <p>
                The point where the two lines intersect represents the
                solution of the simultaneous equations.
            </p>

            <p>
                Therefore, the intersection gives the values of x and y.
            </p>
        `,

        practice: [
            { question: "If two lines intersect at x = 2, what is the x-coordinate?", answer: 2 },
            { question: "If two lines intersect at x = 4, what is the x-coordinate?", answer: 4 },
            { question: "If two lines intersect at x = 6, what is the x-coordinate?", answer: 6 },
            { question: "If two lines intersect at x = 8, what is the x-coordinate?", answer: 8 },
            { question: "If two lines intersect at x = 10, what is the x-coordinate?", answer: 10 }
        ]
    },


    {
        id: 69,
        title: "Dependent and Inconsistent Equations",
        description: "Understand when simultaneous equations have infinitely many or no solutions.",

        content: `
            <h3>Special Cases</h3>

            <p>
                Some simultaneous equations may have no unique solution.
            </p>

            <p>
                If two equations represent the same line, there are
                infinitely many solutions.
            </p>

            <p>
                If two equations represent parallel lines, there is
                no solution.
            </p>
        `,

        practice: [
            { question: "How many solutions do identical equations have?", answer: 1 },
            { question: "How many solutions does a unique intersection have?", answer: 1 },
            { question: "How many solutions does a pair of parallel lines have?", answer: 0 },
            { question: "How many coordinates are needed to specify a point?", answer: 2 },
            { question: "How many variables are commonly used in two simultaneous equations?", answer: 2 }
        ]
    },


    {
        id: 70,
        title: "Simultaneous Equations Revision",
        description: "Review elimination, substitution and graphical methods.",

        content: `
            <h3>Revision</h3>

            <p>
                Simultaneous equations can be solved using:
            </p>

            <ul>
                <li>Elimination</li>
                <li>Substitution</li>
                <li>Graphical methods</li>
            </ul>

            <p>
                Always check your solution by substituting the values into
                the original equations.
            </p>
        `,

        practice: [
            { question: "Solve x + y = 10 and x - y = 2. Find x.", answer: 6 },
            { question: "Solve x + y = 12 and x - y = 4. Find x.", answer: 8 },
            { question: "Solve x + y = 14 and x - y = 6. Find x.", answer: 10 },
            { question: "Solve x + y = 16 and x - y = 8. Find x.", answer: 12 },
            { question: "Solve x + y = 18 and x - y = 10. Find x.", answer: 14 }
        ]
    },


    {
        id: 71,
        title: "Introduction to Inequalities",
        description: "Learn the meaning of inequality symbols.",

        content: `
            <h3>Inequalities</h3>

            <p>
                Inequalities compare two quantities.
            </p>

            <ul>
                <li>&gt; means greater than.</li>
                <li>&lt; means less than.</li>
                <li>&ge; means greater than or equal to.</li>
                <li>&le; means less than or equal to.</li>
            </ul>

            <p>
                Example:
                <strong>x &gt; 5</strong>
                means x is greater than 5.
            </p>
        `,

        practice: [
            { question: "Is 8 greater than 5? Enter 1 for yes.", answer: 1 },
            { question: "Is 3 less than 7? Enter 1 for yes.", answer: 1 },
            { question: "Is 10 greater than 4? Enter 1 for yes.", answer: 1 },
            { question: "Is 2 less than 9? Enter 1 for yes.", answer: 1 },
            { question: "Is 15 greater than 6? Enter 1 for yes.", answer: 1 }
        ]
    },


    {
        id: 72,
        title: "Solving Simple Inequalities",
        description: "Learn how to solve basic linear inequalities.",

        content: `
            <h3>Simple Inequalities</h3>

            <p>
                Inequalities can be solved using methods similar to equations.
            </p>

            <p>
                Example:
                <strong>x + 3 &gt; 7</strong>
            </p>

            <p>
                Subtract 3:
                <strong>x &gt; 4</strong>
            </p>
        `,

        practice: [
            { question: "Solve x + 3 > 7. What number is the boundary?", answer: 4 },
            { question: "Solve x + 5 > 10. What number is the boundary?", answer: 5 },
            { question: "Solve x - 2 > 6. What number is the boundary?", answer: 8 },
            { question: "Solve x + 4 < 9. What number is the boundary?", answer: 5 },
            { question: "Solve x - 3 < 7. What number is the boundary?", answer: 10 }
        ]
    },


    {
        id: 73,
        title: "Inequalities with Multiplication",
        description: "Learn how to solve inequalities involving multiplication.",

        content: `
            <h3>Multiplication</h3>

            <p>
                If an inequality is divided or multiplied by a positive
                number, its direction remains unchanged.
            </p>

            <p>
                Example:
                <strong>2x &gt; 10</strong>
            </p>

            <p>
                Divide by 2:
                <strong>x &gt; 5</strong>
            </p>
        `,

        practice: [
            { question: "Solve 2x > 10. What is the boundary value?", answer: 5 },
            { question: "Solve 3x > 12. What is the boundary value?", answer: 4 },
            { question: "Solve 4x > 20. What is the boundary value?", answer: 5 },
            { question: "Solve 5x > 25. What is the boundary value?", answer: 5 },
            { question: "Solve 6x > 30. What is the boundary value?", answer: 5 }
        ]
    },


    {
        id: 74,
        title: "Inequalities with Negative Numbers",
        description: "Learn why the inequality sign changes when multiplying or dividing by a negative number.",

        content: `
            <h3>Important Rule</h3>

            <p>
                When an inequality is multiplied or divided by a negative
                number, the inequality sign must be reversed.
            </p>

            <p>
                Example:
                <strong>-2x &gt; 10</strong>
            </p>

            <p>
                Dividing by -2 gives:
                <strong>x &lt; -5</strong>
            </p>
        `,

        practice: [
            { question: "Solve -2x > 10. What is the boundary value?", answer: -5 },
            { question: "Solve -3x > 12. What is the boundary value?", answer: -4 },
            { question: "Solve -4x > 20. What is the boundary value?", answer: -5 },
            { question: "Solve -5x > 25. What is the boundary value?", answer: -5 },
            { question: "Solve -6x > 30. What is the boundary value?", answer: -5 }
        ]
    },


    {
        id: 75,
        title: "Compound Inequalities",
        description: "Learn how two inequality conditions can be combined.",

        content: `
            <h3>Compound Inequalities</h3>

            <p>
                A compound inequality contains two inequality conditions.
            </p>

            <p>
                Example:
                <strong>2 &lt; x &lt; 8</strong>
            </p>

            <p>
                This means x is greater than 2 and less than 8.
            </p>
        `,

        practice: [
            { question: "In 2 < x < 8, what is the lower boundary?", answer: 2 },
            { question: "In 2 < x < 8, what is the upper boundary?", answer: 8 },
            { question: "In 3 < x < 10, what is the lower boundary?", answer: 3 },
            { question: "In 3 < x < 10, what is the upper boundary?", answer: 10 },
            { question: "In 5 < x < 12, what is the upper boundary?", answer: 12 }
        ]
    },


    {
        id: 76,
        title: "Representing Inequalities on a Number Line",
        description: "Learn how inequalities are represented visually on number lines.",

        content: `
            <h3>Number Lines</h3>

            <p>
                Inequalities can be represented on a number line.
            </p>

            <p>
                An open circle is commonly used for strict inequalities
                such as x &gt; 3.
            </p>

            <p>
                A closed circle is used for inequalities that include
                equality, such as x &ge; 3.
            </p>
        `,

        practice: [
            { question: "For x > 5, what is the boundary value?", answer: 5 },
            { question: "For x < 3, what is the boundary value?", answer: 3 },
            { question: "For x >= 7, what is the boundary value?", answer: 7 },
            { question: "For x <= 9, what is the boundary value?", answer: 9 },
            { question: "For x > 2, what is the boundary value?", answer: 2 }
        ]
    },


    {
        id: 77,
        title: "Inequalities with Brackets",
        description: "Learn how to expand brackets while solving inequalities.",

        content: `
            <h3>Brackets</h3>

            <p>
                Use the distributive property to expand brackets before
                solving the inequality.
            </p>

            <p>
                Example:
                <strong>2(x + 3) &gt; 10</strong>
            </p>

            <p>
                Expand:
                <strong>2x + 6 &gt; 10</strong>
            </p>

            <p>
                Therefore:
                <strong>x &gt; 2</strong>
            </p>
        `,

        practice: [
            { question: "Solve 2(x + 3) > 10. What is the boundary?", answer: 2 },
            { question: "Solve 3(x + 2) > 12. What is the boundary?", answer: 2 },
            { question: "Solve 4(x + 1) > 12. What is the boundary?", answer: 2 },
            { question: "Solve 5(x + 2) > 20. What is the boundary?", answer: 2 },
            { question: "Solve 2(x + 5) > 14. What is the boundary?", answer: 2 }
        ]
    },


    {
        id: 78,
        title: "Inequalities in Word Problems",
        description: "Learn how inequalities can represent real-life restrictions.",

        content: `
            <h3>Real-Life Inequalities</h3>

            <p>
                Inequalities are useful when a quantity has a limit or
                restriction.
            </p>

            <p>
                For example, if a person must be at least 18 years old,
                we can write:
                <strong>age &ge; 18</strong>.
            </p>
        `,

        practice: [
            { question: "If age must be at least 18, what is the minimum age?", answer: 18 },
            { question: "If a score must be at least 50, what is the minimum score?", answer: 50 },
            { question: "If a number must be greater than 10, what is the boundary?", answer: 10 },
            { question: "If a number must be less than 20, what is the boundary?", answer: 20 },
            { question: "If weight must be at least 60 kg, what is the minimum weight?", answer: 60 }
        ]
    },


    {
        id: 79,
        title: "Inequality and Interval Notation",
        description: "Learn the relationship between inequalities and intervals.",

        content: `
            <h3>Intervals</h3>

            <p>
                An interval describes a range of values.
            </p>

            <p>
                For example:
                <strong>2 &lt; x &lt; 7</strong>
                describes all values between 2 and 7.
            </p>
        `,

        practice: [
            { question: "For 2 < x < 7, what is the lower endpoint?", answer: 2 },
            { question: "For 2 < x < 7, what is the upper endpoint?", answer: 7 },
            { question: "For 3 < x < 9, what is the lower endpoint?", answer: 3 },
            { question: "For 3 < x < 9, what is the upper endpoint?", answer: 9 },
            { question: "For 5 < x < 12, what is the lower endpoint?", answer: 5 }
        ]
    },


    {
        id: 80,
        title: "Inequalities Revision",
        description: "Review the major concepts involved in solving inequalities.",

        content: `
            <h3>Inequality Revision</h3>

            <p>
                Remember the four major inequality symbols:
            </p>

            <p>
                &gt;, &lt;, &ge;, &le;
            </p>

            <p>
                The most important rule is that multiplying or dividing by
                a negative number reverses the inequality sign.
            </p>
        `,

        practice: [
            { question: "What is the boundary in x > 5?", answer: 5 },
            { question: "What is the boundary in x < 8?", answer: 8 },
            { question: "What is the boundary in x >= 10?", answer: 10 },
            { question: "What is the boundary in x <= 12?", answer: 12 },
            { question: "What is the boundary in x > 15?", answer: 15 }
        ]
    },


    {
        id: 81,
        title: "Introduction to Sequences",
        description: "Learn what sequences are and how their terms are arranged.",

        content: `
            <h3>Sequences</h3>

            <p>
                A sequence is an ordered list of numbers that follows
                a particular pattern.
            </p>

            <p>
                Example:
                <strong>2, 4, 6, 8, 10...</strong>
            </p>

            <p>
                The sequence increases by 2 each time.
            </p>
        `,

        practice: [
            { question: "What is the next number: 2, 4, 6, 8, ?", answer: 10 },
            { question: "What is the next number: 3, 6, 9, 12, ?", answer: 15 },
            { question: "What is the next number: 5, 10, 15, 20, ?", answer: 25 },
            { question: "What is the next number: 1, 3, 5, 7, ?", answer: 9 },
            { question: "What is the next number: 10, 20, 30, 40, ?", answer: 50 }
        ]
    },


    {
        id: 82,
        title: "Arithmetic Sequences",
        description: "Learn about sequences with a constant difference.",

        content: `
            <h3>Arithmetic Sequence</h3>

            <p>
                An arithmetic sequence has the same difference between
                consecutive terms.
            </p>

            <p>
                Example:
                <strong>3, 7, 11, 15...</strong>
            </p>

            <p>
                The common difference is 4.
            </p>
        `,

        practice: [
            { question: "Find the common difference: 2, 5, 8, 11.", answer: 3 },
            { question: "Find the common difference: 4, 8, 12, 16.", answer: 4 },
            { question: "Find the common difference: 5, 10, 15, 20.", answer: 5 },
            { question: "Find the common difference: 7, 13, 19, 25.", answer: 6 },
            { question: "Find the common difference: 10, 18, 26, 34.", answer: 8 }
        ]
    },


    {
        id: 83,
        title: "Nth Term of an Arithmetic Sequence",
        description: "Learn the formula for finding the nth term of an arithmetic sequence.",

        content: `
            <h3>Nth Term</h3>

            <p>
                The nth term of an arithmetic sequence is:
            </p>

            <p>
                <strong>Tₙ = a + (n - 1)d</strong>
            </p>

            <p>
                where a is the first term and d is the common difference.
            </p>

            <h3>Example</h3>

            <p>
                For 2, 5, 8, 11...
            </p>

            <p>
                a = 2 and d = 3.
            </p>
        `,

        practice: [
            { question: "For 2, 5, 8, 11, what is the 5th term?", answer: 14 },
            { question: "For 3, 6, 9, 12, what is the 5th term?", answer: 15 },
            { question: "For 5, 10, 15, 20, what is the 5th term?", answer: 25 },
            { question: "For 4, 8, 12, 16, what is the 5th term?", answer: 20 },
            { question: "For 7, 14, 21, 28, what is the 5th term?", answer: 35 }
        ]
    },


    {
        id: 84,
        title: "Geometric Sequences",
        description: "Learn about sequences where each term is multiplied by the same number.",

        content: `
            <h3>Geometric Sequence</h3>

            <p>
                A geometric sequence has a constant ratio between
                consecutive terms.
            </p>

            <p>
                Example:
                <strong>2, 4, 8, 16...</strong>
            </p>

            <p>
                Each term is multiplied by 2.
            </p>
        `,

        practice: [
            { question: "Find the next term: 2, 4, 8, 16, ?", answer: 32 },
            { question: "Find the next term: 3, 6, 12, 24, ?", answer: 48 },
            { question: "Find the next term: 5, 10, 20, 40, ?", answer: 80 },
            { question: "Find the next term: 4, 8, 16, 32, ?", answer: 64 },
            { question: "Find the next term: 10, 20, 40, 80, ?", answer: 160 }
        ]
    },


    {
        id: 85,
        title: "Introduction to Variation",
        description: "Learn how one quantity can change in relation to another.",

        content: `
            <h3>Variation</h3>

            <p>
                Variation describes how one quantity changes when another
                quantity changes.
            </p>

            <p>
                In direct variation:
                <strong>y ∝ x</strong>
            </p>

            <p>
                This means y = kx, where k is the constant of variation.
            </p>
        `,

        practice: [
            { question: "If y = 2x and x = 3, find y.", answer: 6 },
            { question: "If y = 3x and x = 4, find y.", answer: 12 },
            { question: "If y = 4x and x = 5, find y.", answer: 20 },
            { question: "If y = 5x and x = 6, find y.", answer: 30 },
            { question: "If y = 6x and x = 7, find y.", answer: 42 }
        ]
    },


    {
        id: 86,
        title: "Direct Variation",
        description: "Learn how to solve direct variation problems.",

        content: `
            <h3>Direct Variation</h3>

            <p>
                In direct variation:
                <strong>y = kx</strong>
            </p>

            <p>
                If x increases, y increases in the same proportion.
            </p>

            <h3>Example</h3>

            <p>
                If y = 3x and x = 4:
            </p>

            <p>
                y = 3 × 4 = <strong>12</strong>
            </p>
        `,

        practice: [
            { question: "If y = 2x and x = 5, find y.", answer: 10 },
            { question: "If y = 3x and x = 5, find y.", answer: 15 },
            { question: "If y = 4x and x = 6, find y.", answer: 24 },
            { question: "If y = 5x and x = 7, find y.", answer: 35 },
            { question: "If y = 6x and x = 8, find y.", answer: 48 }
        ]
    },


    {
        id: 87,
        title: "Inverse Variation",
        description: "Learn the basic idea of inverse variation.",

        content: `
            <h3>Inverse Variation</h3>

            <p>
                In inverse variation:
                <strong>y = k/x</strong>
            </p>

            <p>
                This means that as x increases, y decreases,
                provided the constant k remains fixed.
            </p>

            <h3>Example</h3>

            <p>
                If y = 12/x and x = 3:
            </p>

            <p>
                y = 12/3 = <strong>4</strong>
            </p>
        `,

        practice: [
            { question: "If y = 12/x and x = 3, find y.", answer: 4 },
            { question: "If y = 20/x and x = 4, find y.", answer: 5 },
            { question: "If y = 30/x and x = 5, find y.", answer: 6 },
            { question: "If y = 42/x and x = 6, find y.", answer: 7 },
            { question: "If y = 56/x and x = 7, find y.", answer: 8 }
        ]
    },


    {
        id: 88,
        title: "Introduction to Functions",
        description: "Learn what a mathematical function is.",

        content: `
            <h3>Functions</h3>

            <p>
                A function is a rule that assigns an output to each allowed
                input.
            </p>

            <p>
                For example:
                <strong>f(x) = 2x + 1</strong>
            </p>

            <p>
                If x = 3:
            </p>

            <p>
                f(3) = 2(3) + 1 = <strong>7</strong>
            </p>
        `,

        practice: [
            { question: "If f(x) = 2x + 1, find f(3).", answer: 7 },
            { question: "If f(x) = 3x + 2, find f(4).", answer: 14 },
            { question: "If f(x) = 4x + 1, find f(5).", answer: 21 },
            { question: "If f(x) = 5x + 2, find f(3).", answer: 17 },
            { question: "If f(x) = 2x + 4, find f(6).", answer: 16 }
        ]
    },


    {
        id: 89,
        title: "Evaluating Functions",
        description: "Learn how to substitute values into functions.",

        content: `
            <h3>Evaluating Functions</h3>

            <p>
                To evaluate a function, substitute the given value for x.
            </p>

            <p>
                Example:
                <strong>f(x) = 3x + 2</strong>
            </p>

            <p>
                f(4) = 3(4) + 2 = <strong>14</strong>
            </p>
        `,

        practice: [
            { question: "If f(x) = 3x + 2, find f(4).", answer: 14 },
            { question: "If f(x) = 2x + 5, find f(6).", answer: 17 },
            { question: "If f(x) = 4x + 3, find f(5).", answer: 23 },
            { question: "If f(x) = 5x + 1, find f(4).", answer: 21 },
            { question: "If f(x) = 6x + 2, find f(3).", answer: 20 }
        ]
    },


    {
        id: 90,
        title: "Sequences, Variation and Functions Revision",
        description: "Review sequences, variation and functions.",

        content: `
            <h3>Revision</h3>

            <p>
                A sequence follows a pattern.
            </p>

            <p>
                Direct variation has the form:
                <strong>y = kx</strong>
            </p>

            <p>
                Inverse variation has the form:
                <strong>y = k/x</strong>
            </p>

            <p>
                A function assigns an output to an input according to a rule.
            </p>
        `,

        practice: [
            { question: "What is the next term: 2, 4, 6, 8?", answer: 10 },
            { question: "If y = 3x and x = 4, find y.", answer: 12 },
            { question: "If y = 20/x and x = 4, find y.", answer: 5 },
            { question: "If f(x) = 2x + 1, find f(4).", answer: 9 },
            { question: "What is the common difference of 5, 8, 11, 14?", answer: 3 }
        ]
    },


    {
        id: 91,
        title: "Introduction to Graphs",
        description: "Learn the basic ideas behind mathematical graphs.",

        content: `
            <h3>Graphs</h3>

            <p>
                A graph provides a visual representation of mathematical
                relationships.
            </p>

            <p>
                Points on a Cartesian plane are written as ordered pairs:
                <strong>(x, y)</strong>.
            </p>

            <p>
                The first coordinate is x and the second coordinate is y.
            </p>
        `,

        practice: [
            { question: "In the point (3, 5), what is the x-coordinate?", answer: 3 },
            { question: "In the point (4, 7), what is the x-coordinate?", answer: 4 },
            { question: "In the point (6, 2), what is the x-coordinate?", answer: 6 },
            { question: "In the point (8, 3), what is the x-coordinate?", answer: 8 },
            { question: "In the point (10, 5), what is the x-coordinate?", answer: 10 }
        ]
    },


    {
        id: 92,
        title: "The Cartesian Plane",
        description: "Learn about the x-axis, y-axis and origin.",

        content: `
            <h3>Cartesian Plane</h3>

            <p>
                The Cartesian plane contains two perpendicular axes:
                the x-axis and the y-axis.
            </p>

            <p>
                Their point of intersection is called the origin.
            </p>

            <p>
                The coordinates of the origin are:
                <strong>(0, 0)</strong>.
            </p>
        `,

        practice: [
            { question: "What is the x-coordinate of the origin?", answer: 0 },
            { question: "What is the y-coordinate of the origin?", answer: 0 },
            { question: "How many axes does a Cartesian plane have?", answer: 2 },
            { question: "What is the first coordinate called?", answer: 0 },
            { question: "What is the second coordinate called?", answer: 0 }
        ]
    },


    {
        id: 93,
        title: "Plotting Points",
        description: "Learn how to locate ordered pairs on a Cartesian plane.",

        content: `
            <h3>Plotting Points</h3>

            <p>
                To plot a point, move along the x-axis first and then
                move vertically along the y-axis.
            </p>

            <p>
                For example, (3, 4) means move 3 units horizontally
                and 4 units vertically.
            </p>
        `,

        practice: [
            { question: "For (3, 5), what is the x-coordinate?", answer: 3 },
            { question: "For (4, 6), what is the x-coordinate?", answer: 4 },
            { question: "For (7, 2), what is the x-coordinate?", answer: 7 },
            { question: "For (8, 5), what is the x-coordinate?", answer: 8 },
            { question: "For (9, 4), what is the x-coordinate?", answer: 9 }
        ]
    },


    {
        id: 94,
        title: "Linear Graphs",
        description: "Learn how linear equations are represented by straight lines.",

        content: `
            <h3>Linear Graphs</h3>

            <p>
                A linear equation produces a straight-line graph.
            </p>

            <p>
                A common form is:
                <strong>y = mx + c</strong>
            </p>

            <p>
                m represents the gradient and c represents the y-intercept.
            </p>
        `,

        practice: [
            { question: "In y = 2x + 3, what is the gradient?", answer: 2 },
            { question: "In y = 3x + 4, what is the gradient?", answer: 3 },
            { question: "In y = 5x + 2, what is the gradient?", answer: 5 },
            { question: "In y = 7x + 1, what is the gradient?", answer: 7 },
            { question: "In y = 4x + 6, what is the gradient?", answer: 4 }
        ]
    },


    {
        id: 95,
        title: "Gradient of a Straight Line",
        description: "Learn how to calculate the gradient of a straight line.",

        content: `
            <h3>Gradient</h3>

            <p>
                Gradient measures the steepness of a line.
            </p>

            <p>
                The formula is:
                <strong>Gradient = change in y / change in x</strong>
            </p>

            <p>
                A positive gradient means the line rises from left to right.
            </p>
        `,

        practice: [
            { question: "Find the gradient between (0,0) and (2,4).", answer: 2 },
            { question: "Find the gradient between (0,0) and (3,6).", answer: 2 },
            { question: "Find the gradient between (0,0) and (4,8).", answer: 2 },
            { question: "Find the gradient between (0,0) and (5,10).", answer: 2 },
            { question: "Find the gradient between (0,0) and (6,12).", answer: 2 }
        ]
    },


    {
        id: 96,
        title: "Y-Intercept",
        description: "Learn how to identify the y-intercept of a straight-line equation.",

        content: `
            <h3>Y-Intercept</h3>

            <p>
                The y-intercept is the point where a line crosses the y-axis.
            </p>

            <p>
                In:
                <strong>y = mx + c</strong>,
                c represents the y-intercept.
            </p>

            <p>
                Example:
                <strong>y = 2x + 5</strong>
            </p>

            <p>
                The y-intercept is 5.
            </p>
        `,

        practice: [
            { question: "In y = 2x + 5, what is the y-intercept?", answer: 5 },
            { question: "In y = 3x + 4, what is the y-intercept?", answer: 4 },
            { question: "In y = 5x + 2, what is the y-intercept?", answer: 2 },
            { question: "In y = 7x + 1, what is the y-intercept?", answer: 1 },
            { question: "In y = 4x + 6, what is the y-intercept?", answer: 6 }
        ]
    },


    {
        id: 97,
        title: "Quadratic Graphs",
        description: "Learn the basic shape and features of quadratic graphs.",

        content: `
            <h3>Quadratic Graphs</h3>

            <p>
                A quadratic function produces a curved graph called
                a parabola.
            </p>

            <p>
                A quadratic graph can open upwards or downwards depending
                on the coefficient of x².
            </p>

            <p>
                Example:
                <strong>y = x²</strong>
                opens upwards.
            </p>
        `,

        practice: [
            { question: "What is the highest power in y = x² + 2x + 1?", answer: 2 },
            { question: "What is the coefficient of x² in y = 3x² + 2?", answer: 3 },
            { question: "What is the coefficient of x² in y = 5x² + x?", answer: 5 },
            { question: "What is the coefficient of x² in y = 7x² + 3?", answer: 7 },
            { question: "What is the highest power in y = 4x² + 2x?", answer: 2 }
        ]
    },


    {
        id: 98,
        title: "Reading Mathematical Graphs",
        description: "Learn how to extract information from graphs.",

        content: `
            <h3>Reading Graphs</h3>

            <p>
                Graphs allow us to read values and identify relationships
                between variables.
            </p>

            <p>
                Always check the scale on both axes before reading values.
            </p>

            <p>
                Points on a graph can be described using coordinates.
            </p>
        `,

        practice: [
            { question: "In the point (5, 8), what is the x-coordinate?", answer: 5 },
            { question: "In the point (6, 10), what is the x-coordinate?", answer: 6 },
            { question: "In the point (7, 12), what is the x-coordinate?", answer: 7 },
            { question: "In the point (8, 14), what is the x-coordinate?", answer: 8 },
            { question: "In the point (9, 16), what is the x-coordinate?", answer: 9 }
        ]
    },


    {
        id: 99,
        title: "Algebra Problem Solving",
        description: "Apply algebraic methods to solve mixed problems.",

        content: `
            <h3>Problem Solving</h3>

            <p>
                Algebra provides tools for solving many mathematical problems.
            </p>

            <p>
                Important techniques include:
            </p>

            <ul>
                <li>Simplifying expressions</li>
                <li>Solving equations</li>
                <li>Factorization</li>
                <li>Using indices</li>
                <li>Working with functions</li>
                <li>Interpreting graphs</li>
            </ul>
        `,

        practice: [
            { question: "Solve: 2x + 4 = 12.", answer: 4 },
            { question: "Simplify: 3x + 5x. What is the coefficient?", answer: 8 },
            { question: "Calculate 2³.", answer: 8 },
            { question: "Calculate √25.", answer: 5 },
            { question: "Solve: x + 7 = 15.", answer: 8 }
        ]
    },


    {
        id: 100,
        title: "Algebra Mastery Revision",
        description: "Complete revision of the major Algebra topics covered in MathHub.",

        content: `
            <h3>🎓 Algebra Mastery</h3>

            <p>
                Congratulations! You have reached Lesson 100 of the
                MathHub Algebra course.
            </p>

            <p>
                You have studied:
            </p>

            <ul>
                <li>Algebraic expressions</li>
                <li>Linear equations</li>
                <li>Indices and surds</li>
                <li>Factorization</li>
                <li>Quadratic equations</li>
                <li>Simultaneous equations</li>
                <li>Inequalities</li>
                <li>Sequences</li>
                <li>Variation</li>
                <li>Functions</li>
                <li>Graphs</li>
            </ul>

            <p>
                Keep practising and applying these concepts to more
                challenging mathematical problems.
            </p>
        `,

        practice: [
            { question: "Solve: 2x + 6 = 16.", answer: 5 },
            { question: "Simplify: 4x + 5x. What is the coefficient?", answer: 9 },
            { question: "Calculate 2⁴.", answer: 16 },
            { question: "Calculate √36.", answer: 6 },
            { question: "Solve: x + 9 = 20.", answer: 11 }
        ]
    }

];


