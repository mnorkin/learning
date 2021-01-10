class HashTable {
  constructor(
    public values: Record<number, any> = {},
    public length: number = 0,
    public size: number = 0
  ) {}

  // Example of a hashing function
  hash(key: any) {
    return key.toString().length % this.size;
  }

  add(key: number, value: any) {
    const hash = this.hash(key);
    if (!this.values.hasOwnProperty(hash)) {
      // create a hash "bucket" if it does not exists
      // Probably needs to be here primitive array, so for the worst case we would need to search
      // though the array, but now we're mapping though the object with O(1) or O(log(n)) complexity
      // which is far better than O(n) like worst case scenario
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
      // if key does not exists in the hash, increase the length
      this.length++;
    }
    // add key->value pair to the hash
    this.values[hash][key] = value;
  }

  /**
   *
   * Searching in the hash table goes very fast. As with an array, we have to go though all of the elements
   * until we find it, with a hash table we simply get the index.
   * This means that it's runtime is constant, O(1)
   */
  search(key: number) {
    const hash = this.hash(key);
    if (
      this.values.hasOwnProperty(hash) &&
      this.values[hash].hasOwnProperty(key)
    ) {
      return this.values[hash][key];
    }
    return undefined;
  }
}
