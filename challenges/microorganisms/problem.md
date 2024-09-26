
## Challenge
Several microorganisms of different families have been arranged next to each other. 
Knowing that a microorganism eats its neighbor if it is of a different family and smaller in size, 
write a program that returns the largest family and its size when the situation reaches an equilibrium.


## Process:  
- Each microorganism belongs to a family, defined by a letter, and has a size, defined by an integer.
- At each simulation round, a microorganism can eat a neighbor (directly to the left or to the right) if the latter is from another family and has a stricly smaller size. If there is a target on both sides, the left one is chosen.
- During a round, the resolution is done from left to right. For example, if a microorganism can be eaten by both its left and right neighbors, the left one is chosen.
- When a microorganism eats another, its size increases by the size of its target and the place occupied by the target disappears
- In the same simulation round, a microorganism cannot both eat and eaten. The choice of event (eating or being eaten) is determined by the order of resolution.
- The simulation ends when no more microorganisms can eat others.


At the end of the simulation, take the microorganism with the target size, return a string consisting of its family, a separation space and its size.
