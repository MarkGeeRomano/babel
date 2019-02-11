module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        'useBuiltIns': 'usage'
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-proposal-pipeline-operator',
      {
        'proposal': 'minimal'
      }
    ]
  ]
}