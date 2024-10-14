function findCenter(edges: number[][]): number { 
    const n = edges.length + 1;
    const freq = new Array(n).fill(0);

    for (const edge of edges) {
        freq[edge[0] - 1]++;
        freq[edge[1] - 1]++;
    }

    for (let i = 0; i < n; i++) {
        if (freq[i] === n - 1) {
        return i + 1;
        }
    }
};