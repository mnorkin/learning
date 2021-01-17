# Object-oriented basics

Objects - represent a real-world entity and the basic building block of OOP

Class - prototype/blueprint of an object. It is a template definition of the attributes and methods of an object.

## Four-principles

Encapsulation - mechanism of binding the data together and hiding it from the outside world. It is achieved when each object keeps its state private so that other objects don't have direct access to its state. Instead, they can access this state only through a set of public functions.

Abstraction - natual extension of encapsulation. It means hiding all but the relevant data about an object in order to reduce complexity of the system.

Inheritance - mechanism of creating new classes from existing ones.

Polymorphism - the ability of an object to take different forms and thus, depending upon the context, to respond to the same message in different ways.

# OO Analysis and Design

The process of OO analysis and design:

1. Identifying the objects in a system
2. Defining relationships between objects
3. Establishing the interface of each object
4. Making a design, which can be converted to executables using OO languages.

# Class diagram

The purpose:

1. Analysis and design of the static view of an application
2. Describe the responsibilities of a system
3. Provide a base for component and deployment diagrams
4. Forward and reverse engineering

Types of relationships between classes:

1. Association - if two classes in a model need to communicate with each other, there must be a link between them. This link can be represented by an association.
2. Multiplicity - how many instances of a class partitipate in the relationship.
3. Aggregation - a relationship where the child can exist independently of the parent.
4. Composition - Another form of the aggregation relationship, but the child class instance lifecycle is dependent on the parent class instance lifecycle.
5. Generalization - Combining similar classes of objects into a single, more general class.
6. Dependency - which one class, the client, uses or depends on another class, the supplier.
7. Abstract - name in italics.

# Activity diagram vs Sequence diagram

Activity diagram captures the process flow. It is used for functional modeling.

Sequence diagram tracks the interaction between the objects.
