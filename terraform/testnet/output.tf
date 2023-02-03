output "opensearch" {
  value = aws_opensearch_domain.domain.endpoint
}

output "lambda" {
  value = aws_lambda_function.function.arn
}

output "api_gateway" {
  value = aws_apigatewayv2_api.api.api_endpoint
}