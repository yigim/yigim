yarn build && \
  aws s3 sync build s3://yigim-client --profile yigim && \
  aws cloudfront create-invalidation --distribution-id EEGCPZMRULWC2  --paths "/*" --profile yigim