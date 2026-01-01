Layer 0 - vector space over some scalar field F

A set of objects ("vectors") that is is closed under addition, scaling and combinations thereof

Commonly the scalar field under consideration is the set of real numbers, R. So the scaling factors ("scalars") will be real numbers. But the vectors themselves, they have no association to real numbers. The are arbitrary objects whose set is closed under addition and scalar multiplication, where we get to define what addition and scalar multiplication means.

---

Layer 1 - linear functionals

For any vector space we can define functions that take elements of that vector space as input and produce the scalar as output.

Any arbitrary function, f(x) = a, where x B V and a B R.

Now, let us consider only those functions that obey linearity, that is

f(ax + by) = af(x) + b(y) where x, y B V and a, b B R

Such a function is called a linear functional.

> a broader concept is a linear map, which is the set of all linear functions between any two vector spaces. When the target is the scalar field associated with the vector space, then we get a linear functional. "functional" here just means a function that returns a number (or as we're referring to them, a scalar).

Now let us consider the set of possible such linear maps that exist for a given vector space. This set is called the set of linear functionals over V, and can be defined as

V* = { f: V -> R | f is linear }

This V* is another vector space, where the elements are linear functionals. For this set, we can define addition and scalar multiplication as:

(f + g)(v) = f(v) + g(v)
(cf)(v) = cf(v) 

This set is called the "dual space" V* of the original vector space V, and the elements of this dual space (i.e. the linear functionals) are called covectors.

Semantically, at this point we can think that
- vectors exist
- covectors "probe" vectors

where "probe" means produce a scalar value to describe a vector. reminder that at this point, don't think of a vector an array of coordinates. we don't know what a vector is beyond the properties it follows. the covector is a way to collapse a vector down to scalar, and do it in a way that the collapses follow linearity.

Also, note that at this point
- vectors do **not** probe/measure vectors

layer 2 - pairing

Consider all pairs (f, v) where f B V* and v B V. 

That is, 

pairs = []
for f in V*:
  for v in V:
    pairs.append((f, v))

Now given the primitives we have so far, what could does this pairing mean? 

It can only mean one thing - function application.

Let's think about this. v is an arbitrary object. f is an function that takes vees and returns scalars in a way that respects linearity. without assuming any more structure, the only (and perfectly natural) way to combine them is to take (f, v) to mean f(v).

(f, v) |-> f(v)

So we have another set V* x V and pairings V* x V -> R

Note so far that we haven't assumed any extra structure apart from closure under addition and scaling for the vector space. rest everything has been definitional, with the slightly curious but still not very surprising emergence that the dual space of V is also a vector space.

aside

Let us consider an example. Again, note that vectors are arbitrary things, but for the sake of visualization consider vectors as elements of R2. Then

vectors are arrows 
covectors are a family of parallel lines, equally spaced, each line is a same value contour
when a covector acts on a vector, in our example vector space, what it probes is the count of the number of contour lines we cross (this is why covectors are also called gradients or normals)

in this geometric picture, assume we were to stretch the x-axis by 2. Neither the vector itself - the arrow - nor the probe done by the covector - the number of crossings - should changes because a vector space doesn't have any concept of coordinates so far (we haven't come to that yet, we're only visualizing it that way). 

To keep the both the vector and number of crossings unchanged, we change the grid coordinates the vector's arrow is labelled by (reduce them), and the spacing between the contour lines (increase them). The end result - the number of crossings - then remains the same.

This is why the components ("coordinates") of the vector are called contravariant (they go against the basis ("grid") change) while the components of the covector are called covariant (they go with the basis change)

But again, a reminder. Vectors are opaque objects, the concept of component hasn't come yet (and when it does come, it applies to only particular types of vector spaces).

layer 4 - inner product / metric

this is the first extra structure we add. we choose a map g: V x V -> R that satisfies three properties:

* symmetry g(u, v) = g(v, u)
* bilinearity g(ax + by, z) = ag(x, z) + bg(y, z) and g(z, ax + by) = ag(z, x) + bg(z, y)
* positive definiteness g(v, v) = 0 iff v = 0, otherwise g(v, v) > 0

any map that satisfies these criteria is called the "inner product"

conventionally, these inner products are written as <., .>. That is, instead of g(u, v), we write <u, v>.

instead of considering the inner product as a map V x V -> R, we can also think of it as curried function. Fix some vector v, then <v, .> is function of vectors. Since the output is a real number, instead of a function we can give it the more specific terminology - functional. and one of the properties of the inner product is that it is bilinear. So effectively, <v, .> is a linear functional.

but we already know that the set of all linear functionals associated with the vector space is V*. So <v, .> is member of the dual space, a covector! 

So any inner product is a particular way of mapping a vector to a covector. Once we have a covector, we can then use it to probe other vectors as usual.

In effect, if we have an inner product defined on our vector space, we allow a vector to measure ("probe") another vector. This allows us to define a "metric" on the vector space.

To expand on this - Previously, only covectors could measure ("probe") a vector, and covectors and vectors live in separate spaces. So while we had a way to "measure" vectors

f(v) B R

It was not a metric, but just an evaluation, since the value depends on an arbitrary choice of f, each giving incompatible measurements.

In contrast, the inner product allows us to define "metric" on the vector space since it gives a canonical way to identify the covector for any vector.

v |-> <v, .> B V*

Identifying vectors with covectors removes teh need for external probes. Each vector can now measure itself (giving a norm) and measure any other vector (giving aligment / similarity). Because the inner product is symmetric, this mutual measurement is symmetric: <u, v> = <v, u>.

Going into more details, A metric on a set is a function

d: X x X -> R

that satisfies (for x, y, z B X)

- non-negativity d(x, y) >= 0
- Identity of indiscernibles d(x, y) = 0 <=> x = y
- symmetry d(x, y) = d(y, x)
- triangle inequality d(x, z) <= d(x, y) + d(y, z)

If we have an inner product <.,.>, we can define norm ("length")

||v|| = sqrt(<v, v>)

and distance

d(u, v) = ||u - v||

It can be shown that this d will satisfy the above axioms; thus the inner product allows us to define this "metric" on the vector space.

- we can measure the "size" / "length" (the norm) of a vector by taking its inner product with itself
- we can measure the distance between two vectors (as the norm of the algebraic difference between them)
- we can measure the "alignment" / "similarity" / "angle" between two vectors (as their inner product)

note that so far we've not chosen any coordinate space, basis vectors or geometric embedding. we start with layer 0 (vector space), layer 1 (dual space of linear functionals), layer 2 (function application as the natural interpretation of pairing vectors and linear functionals). a vector spaces can remain at this point without any notion of geometry. 

however, if we additionally chose an appropriate inner product, we get

inner product -> norm
norm -> metric
metric -> distance
inner product -> angle / projection
self-pairing -> length

Geometric concepts (angle, distance, length) emerge, but none of these presuppose that vectors that are living in a geometric space.

In particular, note that we now have the ability to measure if two vectors are orthogonal to each other - this is true when their inner product is zero.

dot product

The dot product is a particular inner product <u, v> that can be defined on any vector space that is isomorphic to Rn. First we need to choose a basis, and for that particular basis we get a dot product (the inner product itself doesn't depend on basis, but the dot product does). 

In particular, if we choose an orthonormal set of basis, then the dot product u . v has a simple "sum of pairwise coordinate products" formula

u . v = sigma ui vi

> <u, v> says "inner product is being used (abstract, basis-independent)"
>
> u . v says "Euclidean dot product in an orthonormal coordinate system"
