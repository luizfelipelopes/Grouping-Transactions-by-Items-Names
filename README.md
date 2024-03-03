# Grouping Transactions by Items'Names (Wanderlog Assesments)

Problem resolved in Wanderlog Assesments for Software Engineer role.

### Problem
For a given array of transactions, group all of the transactions by item name. Return an array of strings where each string contains the item name followed by a space and the number of associated transactions.

**Note:** Sort the array descending by transaction count, then ascending alphabetically by item name for items with matching transaction counts.

**Example:**

*transactions = ['notebook', 'notebook', 'mouse', 'keyboard', 'mouse']*

There are two items with 2 transactions each: 'notebook' and 'mouse'. In alphabetical order, they are 'mouse', 'notebook'.

There is one item with 1 transaction: 'keyboard'.

The return array, sorted as required, is ['mouse 2', 'notebook 2', 'keyboard 1'].

**Function Description**

Complete the function groupTransactions in the editor below.

groupTransactions has the following parameter(s):

* *string transactions[n]: each transactions[i] denotes the item name in the i^th^ transaction*

Returns:

* *string[]: an array of strings of "item name[space]transaction count" sorted as described*

**Constraints:**

* *1 ≤ n ≤ 10^5^*
* *1 ≤ length of transactions[i] ≤ 10*
* *transactions[i] contains only lowercase English letters, ascii[a-z]*

**Input Format for Custom Testing**

Input from stdin will be processed as follows and passed to the function.

* The first line contains a single integer, n, the size of transactions.
* Each of the next n lines contains a string, the item name for transactions[i].

### Sample Case 1

Sample Input

```
STDIN     Function
-----     -----
4      →  transactions[] size n = 4
bin    →  transactions = ['bin', 'can', 'bin', 'bin']
can
bin
bin
```

Sample Output

```
bin 3
can 1
```

**Explanation:**

* *There is one item 'bin' with 3 transactions.*
* *There is one item 'can' with 1 transaction.*
* *The return array sorted descending by transaction count, then ascending by name is ['bin 3', 'can 1'].*


### Sample Case 2

Sample Input

```
STDIN     Function
-----     -----
3      →  transactions[] size n = 3
banana →  transactions = ['banana', 'pear', 'apple']
pear
apple
```

Sample Output

```
apple 1
banana 1
pear 1
```

**Explanation:**

* *There is one item 'apple' with 1 transaction.*
* *There is one item 'banana' with 1 transaction.*
* *There is one item 'pear' with 1 transaction.*
* *The return array sorted descending by transaction count, then ascending by name is ['apple 1', 'banana 1', 'pear 1'].*