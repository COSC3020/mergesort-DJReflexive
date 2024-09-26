# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


## My Runtime Analysis

First, addressing the base case where the length is equal to 0 or 1, we actually
get a constant run time since an array that is empty or only has 1 element is
already sorted. However, we are going to look at the more general case where
the length is greater than 1.

Going into the first loop, the program will run a time complexity of $\Theta(n)$ 
to process every element in the array (looping through groupings, which the 
groupings are then also looped through with nested loop). 

Then pairs of groupings are compared in the merge() method. The two groupings are 
then iterated through (at the same time, simultaneously), and it checked if elements 
are out of order by cross comparing between the two groups. Since we are interested 
in the worst case scenerio, we are going to assume that the data is ordered in such 
a way that there is a swap occuring every iteration. This process executes with a
time complexity of $\Theta(n)$ since every element has a swap call. If were not 
assuming that the swap call is executed every iteration, it would actually resemble,
$\Theta(logn)$, however, we are not interested in this case for this analysis.

Combining the two time complexities, we see that the worst case complexity is 
$\Theta(n^2)$. In the average case, the final complexity would resemble $\Theta(nlogn)$, however, since we are assuming that the merge function swap on every 
iteration, this increases the complexity. But since we are only interested in the
worst case scenerio, $\Theta(n^2)$ is the final complexity.

# Sources

- geeksforgeeks.org - for help with the merge function. 


# Plagiarism Acknowledgement

I certify that I have listed all sources used to complete this exercise, 
including the use of any Large Language Models. All of the work is my own, 
except where stated otherwise. I am aware that plagiarism carries severe 
penalties and that if plagiarism is suspected, charges may be filed against 
me without prior notice.