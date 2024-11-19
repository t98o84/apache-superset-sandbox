/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { render, screen } from 'spec/helpers/testing-library';
import userEvent from '@testing-library/user-event';
import { Next } from './Next';

test('Next - click when the button is enabled', () => {
  const click = jest.fn();
  render(<Next onClick={click} />);
  expect(click).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByRole('button'));
  expect(click).toHaveBeenCalledTimes(1);
});

test('Next - click when the button is disabled', () => {
  const click = jest.fn();
  render(<Next onClick={click} disabled />);
  expect(click).toHaveBeenCalledTimes(0);
  userEvent.click(screen.getByRole('button'));
  expect(click).toHaveBeenCalledTimes(0);
});
