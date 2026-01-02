Layer 0 - vector space over some scalar field F

A set of objects ("vectors") that is is closed under addition, scaling and combinations thereof

Commonly the scalar field under consideration is the set of real numbers, R. So the scaling factors ("scalars") will be real numbers. But the vectors themselves have no inherent association with real numbers. They are arbitrary objects whose set is closed under addition and scalar multiplication, where we get to define what addition and scalar multiplication means.

With a reminder that the scalar field can also be non-real, like C, in what follows we'll implicitly assume that the field we're using in R.

---

Layer 1 - linear functionals

For any vector space we can define functions that take elements of that vector space as input and produce the scalar as output.

Any arbitrary function, f(x) = a, where x B V and a B R.

Now, let us consider only those functions that obey linearity, that is

f(ax + by) = af(x) + bf(y) where x, y B V and a, b B R

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

layer 2 - canonical pairing

Consider all pairs (f, v) where f B V* and v B V. 

Now given the primitives we have so far, what could does this pairing mean? 

It can only mean one thing - function application.

Let's think about this. v is an arbitrary object. f is an function that takes vees and returns scalars in a way that respects linearity. without assuming any more structure, the only (and perfectly natural) way to combine them is to take (f, v) to mean f(v).

(f, v) |-> f(v)

So we have another set V* x V and a pairing V* x V -> R

To reiterate, there exists for every vector space a dual space of covectors, and a canonical pairing

  (f, v) |-> f(v)

which _is_ function application.

Note so far that we haven't assumed any extra structure apart from closure under addition and scaling for the vector space. rest everything has been definitional, with the slightly curious but still not very surprising emergence that the dual space of V is also a vector space.

aside

Let us consider an example. Again, note that vectors are arbitrary things, but for the sake of visualization consider vectors as elements of R2. Then

vectors are arrows 
covectors are a family of parallel lines, equally spaced, each line is a same value contour
when a covector acts on a vector, in our example vector space, what it probes is the count of the number of contour lines we cross.

in this geometric picture, assume we were to stretch the x-axis by 2. Neither the vector itself - the arrow - nor the probe done by the covector - the number of crossings - should changes because a vector space doesn't have any concept of coordinates so far (we haven't come to that yet, we're only visualizing it that way). 

To keep the both the vector and number of crossings unchanged, we change the grid coordinates the vector's arrow is labelled by (reduce them), and the spacing between the contour lines (increase them). The end result - the number of crossings - then remains the same.

This is why the components ("coordinates") of the vector are called contravariant (they go against the basis ("grid") change) while the components of the covector are called covariant (they go with the basis change)

But again, a reminder. Vectors are opaque objects, the concept of component hasn't come yet (and when it does come, it applies to only particular types of vector spaces).

layer 3 - inner product / metric

this is the first extra structure we add. we choose a map g: V x V -> R that satisfies three properties:

* symmetry g(u, v) = g(v, u)
* bilinearity g(ax + by, z) = ag(x, z) + bg(y, z) and g(z, ax + by) = ag(z, x) + bg(z, y)
* positive definiteness g(v, v) = 0 iff v = 0, otherwise g(v, v) > 0

any map that satisfies these criteria is called the "inner product"

conventionally, these inner products are written as <., .>. That is, instead of g(u, v), we write <u, v>.

instead of considering the inner product as a map V x V -> R, we can also think of it as curried function. Fix some vector v, then <v, .> is function of vectors. Since the output is a real number, instead of a function we can give it the more specific terminology - functional. and one of the properties of the inner product is that it is bilinear. So effectively, <v, .> is a linear functional.

but we already know that the set of all linear functionals associated with the vector space is V*. So <v, .> is member of the dual space, a covector! 

So any inner product is a particular way of mapping a vector to a covector. Once we have a covector, we can then use it to probe other vectors as usual.

In effect, if we have an inner product defined on our vector space, we allow a vector to measure ("probe") another vector. This allows us to induce a "metric" on the vector space.

To expand on this - Previously, only covectors could measure ("probe") a vector, and covectors and vectors live in separate spaces. So while we had a way to "measure" vectors

f(v) B R

It was not a metric, but just an evaluation, since the value depends on an arbitrary choice of f, each giving incompatible measurements.

In contrast, the inner product allows us to induce "metric" on the vector space since it gives a natural way to identify the covector for any vector.

v |-> <v, .> B V*

> Natural here means that once we decide on a particular inner product, then there is only one canonical way to use that inner product to identify the unique covector associated to any vector.

Identifying vectors with covectors removes the need for external probes. Each vector can now measure itself (giving a norm) and measure any other vector (giving aligment / similarity). Because the inner product is symmetric, this mutual measurement is symmetric: <u, v> = <v, u>.

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

The dot product is a particular inner product <u, v> that can be defined on any vector space that is isomorphic to Rn.

Such vector spaces are also called finite-dimensional real vector spaces. In such spaces, we can choose a set of basis vectors, and then express any other arrow (vector) in the space in terms of scaled combinations (aka linear combinations) of those basis vectors. These scaling factors (coefficients of the linear combination) are the "coordinates" of the arrow (i.e, the vector).

> Note that the concept of inner product doesn't depend on a choice of basis, but the dot product does.

In particular, if we choose an orthonormal set of basis (where the orthogonality and norm itself is defined in terms of the inner product - vectors whose inner product is 0 are orthogonal and a set of mutually orthogonal ones which all have a norm of 1 form an orthonormal basis), then that particular inner product, which gets called the dot product, u . v has a simple "sum of pairwise coordinate products" formula

u . v = sigma ui vi

> <u, v> says "inner product is being used (abstract, basis-independent)"
>
> u . v says "Euclidean dot product in an orthonormal coordinate system"
>
> Note that the concept of inner product doesn't depend on a choice of basis. The dot product _is_ an inner product so it also doesn't depend on a choice of basis. However, the dot product _formula_, does require that the coordinates being used are in terms of an orthonormal basis. 

ML

In ML contexts, usually the vector space we deal with is isomorphic to Rn, the basis are assumed to be the standard orthonormal ones, and the inner product is assumed to be the dot product.

The interesting stuff starts happening atop this structure.

The dot product is treated as "multiplication" - a binary operation that return a scalar. Note that the vector space itself has no multiplication primitive, the only operations we get are addition, scaling, and probing using a linear functional from the dual space. since we've chosen an inner product, we also get norm, angle, distance.

So multiplying a vector with a another vector is a short hand for saying take the inner product of the two vectors, in these cases, the dot product. This is standing in for the following operations:

- Transform one of the vectors into its covector
- Probe the other vector using this covector.
- The resultant scalar is the result of the operation.

Matrix vector multiplication (in this vernacular) is then performing multiple such multiplications, and returning the stacked result. Infact the matrix vector multiplication can be (in this vernacular) considered as a primitive - taking multiple dot products of a single vector in one go, and the vector vector multiplication (which isn't a phrase that you'll hear, what's said is either vector-vector product or, most correctly, inner product) is a special case where it devolves into a single dot product.

In such framings, we also start to think in terms of the low level "coordinates" - vectors as arrays of numbers - instead of thinking of them as opaque objects in a vector space. To retain "type safety" (i.e we don't willy nilly mix vectors and covectors), the mechanical manipulation of coordinates has to make sure that the "shapes" match.

There are two operations then:

u . v - a dot product. The dimensions of u and v must match. The result is the sum of the pairwise products.

u v - a matrix multiplication, where each "matrix" is either a vector (one-dimensional array of scalars) or a matrix (a two-dimensional array of scalars). For this operation, the inner dimensions must match. So u B Ra x b and v B Rb x c can be multiplied, for any a, b and c B I. The mechanical operation then is perform a x c dot products of the b dimensional vectors.

Let's take the simples case. Consider u and v as two vectors of the same dimension d. u . v is clear. But saying u v is not correct, because the shapes don't match, both u, v B R 1xd (if for our problem we're representing vectors as "row vectors") or u, v B R dx1 (if for our problem we're representing vectors as "column vectors"). 

To get the shapes to match we need to perform a transpose. Mechanically, the transpose is swapping rows and columns, but the actual operation it is doing in our specific Euclidean vector space with orthonormal basis is converting a vector to its covector (or vice versa).

So we instead write uT v, which is often thought of as converting one of the vectors into a "matrix", but really is taking the covector of the vector u to convert it into a linear functional that can then measure the other v to get us our scalar. All that said, in terms of the mechanical calculations, there is no "conversion to covector" - uT v is exactly the same scalar as u . v.





