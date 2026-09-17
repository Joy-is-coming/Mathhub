const geometryLessons = [

  {
    id: 1,
    title: "Introduction to Geometry",
    description: "Learn the basic ideas and language of geometry.",

    content: `
            <h3>What is Geometry?</h3>

            <p>
                Geometry is the branch of mathematics that deals with
                shapes, sizes, positions, angles and measurements.
            </p>

            <h3>Basic Geometric Ideas</h3>

            <p>
                Some basic ideas in geometry include points, lines,
                line segments, rays and angles.
            </p>

            <h3>Example</h3>

            <p>
                A triangle is a geometric shape with three sides
                and three angles.
            </p>
        `,

    practice: [
      {
        question: "How many sides does a triangle have?",
        answer: 3
      },
      {
        question: "How many dimensions does a point have?",
        answer: 0
      },
      {
        question: "How many endpoints does a line segment have?",
        answer: 2
      },
      {
        question: "How many sides does a square have?",
        answer: 4
      },
      {
        question: "How many angles does a triangle have?",
        answer: 3
      }
    ]
  },


  {
    id: 2,
    title: "Points, Lines and Line Segments",
    description: "Understand points, lines, rays and line segments.",

    content: `
            <h3>Point</h3>

            <p>
                A point represents an exact position in space.
                It has no length or width.
            </p>

            <h3>Line</h3>

            <p>
                A line extends infinitely in both directions.
            </p>

            <h3>Line Segment</h3>

            <p>
                A line segment is part of a line with two endpoints.
            </p>

            <h3>Ray</h3>

            <p>
                A ray has one endpoint and extends infinitely
                in one direction.
            </p>
        `,

    practice: [
      {
        question: "How many endpoints does a line segment have?",
        answer: 2
      },
      {
        question: "How many endpoints does a ray have?",
        answer: 1
      },
      {
        question: "How many dimensions does a point have?",
        answer: 0
      },
      {
        question: "How many directions does a line extend infinitely?",
        answer: 2
      },
      {
        question: "How many endpoints does a line have?",
        answer: 0
      }
    ]
  },


  {
    id: 3,
    title: "Angles",
    description: "Learn how angles are formed and measured.",

    content: `
            <h3>What is an Angle?</h3>

            <p>
                An angle is formed when two rays meet at a common
                endpoint called the vertex.
            </p>

            <h3>Types of Angles</h3>

            <p>
                Acute angle: less than 90°.
            </p>

            <p>
                Right angle: exactly 90°.
            </p>

            <p>
                Obtuse angle: greater than 90° but less than 180°.
            </p>

            <p>
                Straight angle: exactly 180°.
            </p>
        `,

    practice: [
      {
        question: "How many degrees are in a right angle?",
        answer: 90
      },
      {
        question: "How many degrees are in a straight angle?",
        answer: 180
      },
      {
        question: "How many degrees are in a full rotation?",
        answer: 360
      },
      {
        question: "An acute angle is less than how many degrees?",
        answer: 90
      },
      {
        question: "An obtuse angle is greater than how many degrees?",
        answer: 90
      }
    ]
  },


  {
    id: 4,
    title: "Triangles",
    description: "Learn the properties and types of triangles.",

    content: `
            <h3>What is a Triangle?</h3>

            <p>
                A triangle is a polygon with three sides,
                three vertices and three angles.
            </p>

            <h3>Types of Triangles</h3>

            <p>
                Equilateral triangle: all three sides are equal.
            </p>

            <p>
                Isosceles triangle: two sides are equal.
            </p>

            <p>
                Scalene triangle: all three sides are different.
            </p>

            <p>
                Right-angled triangle: one angle is 90°.
            </p>
        `,

    practice: [
      {
        question: "How many sides does a triangle have?",
        answer: 3
      },
      {
        question: "How many angles does a triangle have?",
        answer: 3
      },
      {
        question: "How many equal sides does an equilateral triangle have?",
        answer: 3
      },
      {
        question: "How many equal sides does an isosceles triangle have?",
        answer: 2
      },
      {
        question: "How many degrees are in the angles of a triangle altogether?",
        answer: 180
      }
    ]
  },


  {
    id: 5,
    title: "Quadrilaterals",
    description: "Explore squares, rectangles, parallelograms and other quadrilaterals.",

    content: `
            <h3>What is a Quadrilateral?</h3>

            <p>
                A quadrilateral is a polygon with four sides.
            </p>

            <h3>Common Quadrilaterals</h3>

            <p>
                A square has four equal sides and four right angles.
            </p>

            <p>
                A rectangle has four right angles.
            </p>

            <p>
                A parallelogram has two pairs of parallel sides.
            </p>

            <p>
                A trapezium has at least one pair of parallel sides.
            </p>
        `,

    practice: [
      {
        question: "How many sides does a quadrilateral have?",
        answer: 4
      },
      {
        question: "How many right angles does a rectangle have?",
        answer: 4
      },
      {
        question: "How many equal sides does a square have?",
        answer: 4
      },
      {
        question: "How many pairs of parallel sides does a parallelogram have?",
        answer: 2
      },
      {
        question: "What is the sum of the interior angles of a quadrilateral?",
        answer: 360
      }
    ]
  },


  {
    id: 6,
    title: "Perimeter",
    description: "Learn how to calculate the distance around shapes.",

    content: `
            <h3>What is Perimeter?</h3>

            <p>
                Perimeter is the total distance around the outside
                of a two-dimensional shape.
            </p>

            <h3>Rectangle</h3>

            <p>
                The perimeter of a rectangle is:
            </p>

            <p>
                P = 2(l + w)
            </p>

            <h3>Square</h3>

            <p>
                The perimeter of a square is:
            </p>

            <p>
                P = 4s
            </p>
        `,

    practice: [
      {
        question: "What is the perimeter of a square with side 5?",
        answer: 20
      },
      {
        question: "What is the perimeter of a square with side 8?",
        answer: 32
      },
      {
        question: "A rectangle has length 10 and width 5. What is its perimeter?",
        answer: 30
      },
      {
        question: "A square has side 12. What is its perimeter?",
        answer: 48
      },
      {
        question: "A rectangle has length 7 and width 3. What is its perimeter?",
        answer: 20
      }
    ]
  },


  {
    id: 7,
    title: "Area of Shapes",
    description: "Learn how to calculate the area of common shapes.",

    content: `
            <h3>What is Area?</h3>

            <p>
                Area measures the amount of space inside a
                two-dimensional shape.
            </p>

            <h3>Rectangle</h3>

            <p>
                A = length × width
            </p>

            <h3>Square</h3>

            <p>
                A = side × side
            </p>

            <h3>Triangle</h3>

            <p>
                A = ½ × base × height
            </p>
        `,

    practice: [
      {
        question: "What is the area of a square with side 5?",
        answer: 25
      },
      {
        question: "What is the area of a rectangle with length 10 and width 4?",
        answer: 40
      },
      {
        question: "What is the area of a triangle with base 10 and height 4?",
        answer: 20
      },
      {
        question: "What is the area of a square with side 8?",
        answer: 64
      },
      {
        question: "What is the area of a rectangle with length 6 and width 5?",
        answer: 30
      }
    ]
  },


  {
    id: 8,
    title: "Circles",
    description: "Learn the basic parts and measurements of circles.",

    content: `
            <h3>Parts of a Circle</h3>

            <p>
                The radius is the distance from the centre of a
                circle to its edge.
            </p>

            <p>
                The diameter passes through the centre and connects
                two points on the circle.
            </p>

            <p>
                Diameter = 2 × radius
            </p>

            <h3>Circumference</h3>

            <p>
                C = 2πr
            </p>

            <h3>Area</h3>

            <p>
                A = πr²
            </p>
        `,

    practice: [
      {
        question: "If the radius of a circle is 5, what is its diameter?",
        answer: 10
      },
      {
        question: "If the radius is 7, what is the diameter?",
        answer: 14
      },
      {
        question: "If the diameter is 20, what is the radius?",
        answer: 10
      },
      {
        question: "How many times the radius gives the diameter?",
        answer: 2
      },
      {
        question: "What is the radius of a circle with diameter 16?",
        answer: 8
      }
    ]
  },


  {
    id: 9,
    title: "Pythagoras' Theorem",
    description: "Use Pythagoras' theorem to solve right-angled triangles.",

    content: `
            <h3>Pythagoras' Theorem</h3>

            <p>
                Pythagoras' theorem applies to right-angled triangles.
            </p>

            <p>
                a² + b² = c²
            </p>

            <p>
                The longest side, opposite the right angle,
                is called the hypotenuse.
            </p>

            <h3>Example</h3>

            <p>
                If the two shorter sides are 3 and 4:
            </p>

            <p>
                c² = 3² + 4²
            </p>

            <p>
                c² = 9 + 16 = 25
            </p>

            <p>
                Therefore c = 5.
            </p>
        `,

    practice: [
      {
        question: "What is the hypotenuse of a right triangle with sides 3 and 4?",
        answer: 5
      },
      {
        question: "What is the hypotenuse when the shorter sides are 5 and 12?",
        answer: 13
      },
      {
        question: "What is 3² + 4²?",
        answer: 25
      },
      {
        question: "What is the square root of 25?",
        answer: 5
      },
      {
        question: "What is the hypotenuse when the shorter sides are 6 and 8?",
        answer: 10
      }
    ]
  },


  {
    id: 10,
    title: "Coordinate Geometry",
    description: "Learn how points are represented on the Cartesian plane.",

    content: `
            <h3>Cartesian Plane</h3>

            <p>
                Coordinate geometry uses numbers to describe the
                position of points on a plane.
            </p>

            <p>
                A point is usually written as (x, y).
            </p>

            <h3>x-coordinate</h3>

            <p>
                The x-coordinate describes horizontal position.
            </p>

            <h3>y-coordinate</h3>

            <p>
                The y-coordinate describes vertical position.
            </p>

            <h3>Example</h3>

            <p>
                In the point (4, 7), the x-coordinate is 4
                and the y-coordinate is 7.
            </p>
        `,

    practice: [
      {
        question: "What is the x-coordinate of (5, 8)?",
        answer: 5
      },
      {
        question: "What is the y-coordinate of (5, 8)?",
        answer: 8
      },
      {
        question: "What is the x-coordinate of (10, 3)?",
        answer: 10
      },
      {
        question: "What is the y-coordinate of (10, 3)?",
        answer: 3
      },
      {
        question: "How many coordinates describe a point (x, y)?",
        answer: 2
      }
    ]
  }

];